// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';
const resultFile = 'results.json';

jsonfile.readFile(file, function (err, obj) {
  var items = obj.items;
  var count = 0;
  var result = {};
  var contentToWrite = [];
  var item = {};
  var i;
  var product;
  var inventories;
  var availability;
  var images;
  var brand;
  var authorName;
  var price;
  var imageLink;

  // Go through the items and find all results that have kind of shopping#product.
  for (i = 0; i < items.length; i++) {
    if (items[i].kind === 'shopping#product') {
      count++;
    }
  }

  /**
   * This count information is also stored in:
   * obj.currentItemCount,
   * obj.itemsPerPage
   */
  result.numOfShoppingProduct = count;

  // Save the title of all items with a backorder availability in inventories.
  for (i = 0; i < items.length; i++) {
    product = items[i].product;
    inventories = product.inventories;
    availability = inventories[0].availability;

    if (availability === 'backorder') {
      contentToWrite.push(product.title);
    }
  }

  result.titleBackorderInventories = contentToWrite;

  // Save the title of all items with more than one image link.
  contentToWrite = [];

  for (i = 0; i < items.length; i++) {
    product = items[i].product;
    images = product.images;

    if (images.length > 1) {
      contentToWrite.push(product.title);
    }
  }

  result.titleMoreThanOneImageLink = contentToWrite;

  // Save all "Canon" products in the items.
  contentToWrite = [];

  for (i = 0; i < items.length; i++) {
    product = items[i].product;
    brand = product.brand.toLowerCase();

    if (brand === 'canon') {
      contentToWrite.push(items[i]);
    }
  }

  result.canonProducts = contentToWrite;

  // Save all items that have an author name of "eBay" and are brand "Canon".
  contentToWrite = [];

  for (i = 0; i < items.length; i++) {
    product = items[i].product;
    brand = product.brand.toLowerCase();
    authorName = product.author.name.toLowerCase();

    if (authorName.indexOf('ebay') !== -1 && brand === 'canon') {
      contentToWrite.push(items[i]);
    }
  }

  result.eBayAndCanon = contentToWrite;

  // Save all the products with their brand, price, and an image link.
  contentToWrite = [];

  for (i = 0; i < items.length; i++) {
    product = items[i].product;
    brand = product.brand;
    price = product.inventories[0].price;
    imageLink = product.images[0].link;

    item = {};
    item.brand = brand;
    item.price = price;
    item.imageLink = imageLink;

    contentToWrite.push(item);
  }

  result.productsWithBrandPriceImageLink = contentToWrite;

  // Save all items made by Sony.
  result.sonyProducts = getItemsByBrand(items, 'Sony');

  // Save all items made by Sony that are available.
  result.availableSonyProducts = getAvailableProducts(
    getItemsByBrand(items, 'Sony')
  );

  // Save all available items by the author "Adorama Camera".
  result.availableItemsByAdoramaCamera = getAvailableProducts(
    getItemsByAuthor(items, 'Adorama Camera')
  );

  // Save all items made by Nikon with the author eBay.
  result.nikonAndeBay = getItemsByAuthor(
    getItemsByBrand(items, 'Nikon'),
    'eBay'
  );

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});

// node google-shopping.js getkey titleBackorderInventories
function getKey() {
  var command = process.argv[2];
  var key = process.argv[3];

  if (command === 'getkey' && key) {
    jsonfile.readFile(resultFile, function (err, obj) {
      if (obj[key]) {
        console.log(obj[key]);
      } else {
        console.log('Key does not exist.');
      }
    });
  }
}

// node google-shopping.js products.json
// node google-shopping.js collection.json
function readFile() {
  var filename = process.argv[2];
  if (filename) {
    jsonfile.readFile(filename, function (err, obj) {
      console.log(obj);
    });
  } else {
    console.log('File does not exist.');
  }
}

// Create a new item in the array.
function createNew() {
  var command = process.argv[2];
  var item = process.argv[3];

  if (command === 'insertgoogleshopping') {
    jsonfile.readFile('products.json', function (err, obj) {
      obj.items.push(JSON.parse(item));
      jsonfile.writeFile('products.json', obj, function (err) {
        console.log(err);
      });
    });
  } else if (command === 'insertartcollection') {
    jsonfile.readFile('collection.json', function (err, obj) {
      obj.items.push(JSON.parse(item));
      jsonfile.writeFile('products.json', obj, function (err) {
        console.log(err);
      });
    });
  } else {
    console.log('Invalid command.');
  }
}

function getItemsByBrand(items, brand) {
  var result = [];
  var i;
  var productBrand;

  brand = brand.toLowerCase();

  for (i = 0; i < items.length; i++) {
    productBrand = items[i].product.brand.toLowerCase();

    if (productBrand === brand) {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

function getItemsByAuthor(items, author) {
  var result = [];
  var i;
  var productAuthor;

  author = author.toLowerCase();

  for (i = 0; i < items.length; i++) {
    productAuthor = items[i].product.author.name.toLowerCase();

    if (productAuthor.indexOf(author) !== -1) {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

function getAvailableProducts(items) {
  var result = [];
  var i;
  var availability;

  for (i = 0; i < items.length; i++) {
    availability = items[i].product.inventories[0].availability;

    if (availability === 'inStock') {
      result.push(items[i]);
    }
  }

  return getResult(result);
}

function getResult(result) {
  if (result.length) {
    return result;
  } else {
    return 'Sorry, nothing found.';
  }
}

// getKey();
// readFile();
createNew();
