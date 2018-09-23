//  GLOBAL VARIABLES
var jsonfile = require('jsonfile');
var productsFile = 'products.json';

//  DELIVERABLES
//  QUESTION 1
function getShoppingProducts(products) {
  console.log('Question #1');
  var count = 0;
  var items = products.items;

  Object.keys(items).forEach(function (key) {
    if (items[key].kind === 'shopping#product') count += 1;
  });
  return count;
}

// QUESTION 2
function getItemsByAvailability(products, param) {
  console.log('Question #2');
  var items = products.items;
  var results = [];

  Object.keys(items).forEach(function (key) {
    var item = items[key].product;
    if (item.inventories[0].availability === param) {
      results.push(item.title);
    }
  });
  return results;
}

// QUESTION 3
function getItemsByMoreOneImageLink(products) {
  console.log('Question #3');
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
  console.log('Question #4');
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
  console.log('Question #5');
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
  console.log('Question #6');
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

// READFILE FOR EVERYTHING
jsonfile.readFile(productsFile, function (readErr, obj) {
  if (readErr) {
    console.error(readErr);
  } else {
    var writeMe = {};

    // QUESTION 1
    console.log(getShoppingProducts(obj));
    // QUESTION 2
    writeMe.titleBackorderInventories = getItemsByAvailability(obj, 'backorder');
    // QUESTION 3
    writeMe.titleMoreImageLinks = getItemsByMoreOneImageLink(obj);
    // QUESTION 4
    writeMe.CannonProducts = getItemsByBrand(obj, 'Canon');
    // QUESTION 5
    writeMe.itemEbayCanon = getItemsByAuthor(getItemsByBrand(obj, 'Canon'), 'eBay');
    // QUESTION 6
    writeMe.productsBrandPriceLink = getBrandPriceLink(obj);
    // WRITING TO RESULT.JSON
    jsonfile.writeFile('results.json', writeMe, function (writeErr) {
      if (writeErr) console.error(writeErr);
    });
  }
});
