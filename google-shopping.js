//  GLOBAL VARIABLES
var jsonfile = require('jsonfile');
var file;

//  DELIVERABLES
//  QUESTION 1
function getShoppingProducts(items) {
  var count = 0;

  Object.keys(items).forEach(function (key) {
    if (items[key].kind === 'shopping#product') count += 1;
  });
  return count;
}

// QUESTION 2
function getItemsByAvailability(items, param) {
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.inventories[0].availability === param) {
      results.push(items[key]);
    }
  });
  return results;
}

// QUESTION 3
function getItemsByMoreOneImageLink(items) {
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
function getItemsByBrand(items, brand) {
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
      results.push(items[key]);
    }
  });
  return results;
}

// QUESTION 6
function getBrandPriceLink(items) {
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

// EXTRA 3 - see global variable for check
function setReadFile(param) {
  return param;
}

if (process.argv[2] !== undefined) {
  file = setReadFile(process.argv[2]);
} else file = 'products.json';

// READFILE FOR EVERYTHING
jsonfile.readFile(file, function (readErr, obj) {
  if (readErr) {
    console.error(readErr);
  } else if (file === 'products.json') {
    var writeMe = {};
    var items = obj.items;

    // QUESTION 1
    console.log(getShoppingProducts(items));
    // QUESTION 2
    var titles = [];
    getItemsByAvailability(items, 'backorder').forEach(function (element) {
      titles.push(element.product.title);
    });
    writeMe.titleBackorderInventories = titles;
    console.log('Question 2 sucess');
    // QUESTION 3
    writeMe.titleMoreImageLinks = getItemsByMoreOneImageLink(items);
    console.log('Question 3 sucess');
    // QUESTION 4
    writeMe.CanonProducts = getItemsByBrand(items, 'Canon');
    console.log('Question 4 sucess');
    // QUESTION 5
    writeMe.itemEbayCanon = getItemsByAuthor(getItemsByBrand(items, 'Canon'), 'eBay');
    console.log('Question 5 sucess');
    // QUESTION 6
    writeMe.productsBrandPriceLink = getBrandPriceLink(items);
    console.log('Question 6 sucess');
    // All items made by Sony.
    writeMe.itemSony = getItemsByBrand(items, 'Sony');
    console.log('Get sony sucess');
    // All items made by Sony that are available.
    writeMe.itemSonyAvailable = getItemsByBrand(getItemsByAvailability(items, 'inStock'), 'Sony');
    console.log('Get available sony sucess');
    // All available items by the author "Adorama Camera"
    writeMe.itemAdoramaAvailable = getItemsByAuthor(getItemsByAvailability(items, 'inStock'), 'Adorama Camera');
    console.log('Get adorama items sucess');
    // All items made by Nikon with the author eBay.
    writeMe.itemNikonEbay = getItemsByBrand(getItemsByAuthor(items, 'eBay'), 'Nikon');
    console.log('Get nikon ebay sucess');
    // WRITING TO RESULT.JSON
    writeJson(writeMe);
  } else {
    Object.keys(file).forEach(function (key) {
      console.log(key);
    });
  }
});
