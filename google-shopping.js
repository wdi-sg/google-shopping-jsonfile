//  GLOBAL VARIABLES
var jsonfile = require('jsonfile');
var productsFile = 'products.json';

//  DELIVERABLES
//  QUESTION 1
function getShoppingProducts(products) {
  var count = 0;
  var items = products.items;

  Object.keys(items).forEach(function (key) {
    if (items[key].kind === 'shopping#product') count += 1;
  });
  return count;
}

// QUESTION 2
function getItemsByAvailability(products, param) {
  var items = products.items;
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.inventories[0].availability === param) {
      results.push(item);
    }
  });
  return results;
}

// QUESTION 3
function getItemsByMoreOneImageLink(products) {
  var items = products.items;
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.images.length > 1) {
      results.push(item.title);
    }
  });
  return results;
}

// QUESTION 4
function getItemsByBrand(products, brand) {
  var items = products.items;
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.brand === brand) {
      results.push(items[key]);
    }
  });
  return results;
}

// QUESTION 5
function getItemsByAuthor(items, author) {
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.author.name.indexOf(author) !== -1) {
      results.push(item);
    }
  });
  return results;
}

// QUESTION 6
function getBrandPriceLink(products) {
  var items = products.items;
  var results = [];
  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    var brand = item.brand;
    var price = item.inventories[0].price;
    var image = item.images[0].link;
    var currentItem = [brand, price, image];
    results.push(currentItem);
  });
  return results;
}

// EXTRA 1
function checkArguments() {
  if (process.argv[2] === 'getkey' && process.argv[3] !== undefined) {
    jsonfile.readFile('results.json', function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(result[process.argv[3]]);
      }
    });
  }
}

// EXTRA 2  - see readfile below

// WRITE EVERYTHING
function writeJson(writeMe) {
  jsonfile.writeFile('results.json', writeMe, function (writeErr) {
    if (writeErr) console.error(writeErr);
    else {
      console.log('Result.json updated');
      // EXTRA 1
      checkArguments();
    }
  });
}

// READFILE FOR EVERYTHING
jsonfile.readFile(productsFile, function (readErr, obj) {
  if (readErr) {
    console.error(readErr);
  } else {
    var writeMe = {};

    // QUESTION 1
    console.log(getShoppingProducts(obj));
    // QUESTION 2
    var titles = [];
    getItemsByAvailability(obj, 'backorder').forEach(function (element) {
      titles.push(element.title);
    });
    writeMe.titleBackorderInventories = titles;
    console.log('Question 2 sucess');
    // QUESTION 3
    writeMe.titleMoreImageLinks = getItemsByMoreOneImageLink(obj);
    console.log('Question 3 sucess');
    // QUESTION 4
    writeMe.CanonProducts = getItemsByBrand(obj, 'Canon');
    console.log('Question 4 sucess');
    // QUESTION 5
    writeMe.itemEbayCanon = getItemsByAuthor(getItemsByBrand(obj, 'Canon'), 'eBay');
    console.log('Question 5 sucess');
    // QUESTION 6
    writeMe.productsBrandPriceLink = getBrandPriceLink(obj);
    console.log('Question 6 sucess');
    // All items made by Sony.
    writeMe.itemSony = getItemsByBrand(obj, 'Sony');
    console.log('Get sony sucess');
    // All items made by Sony that are available.
    //writeMe
    // All available items by the author "Adorama Camera"

    // All items made by Nikon with the author eBay.


    // WRITING TO RESULT.JSON
    writeJson(writeMe);
  }
});
