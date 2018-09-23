//  GLOBAL VARIABLES
var jsonfile = require('jsonfile');
var productsFile = 'products.json';

//  DELIVERABLES
//  QUESTION 1
function getShoppingProducts(products) {
  console.log('Question #1');
  var count = 0;
  var items = products.items;

  Object.keys(items).forEach(function(key) {
    if (items[key].kind === 'shopping#product') count += 1;
  });
  return count;
}

// QUESTION 2
function getItemsByAvailability(products, param) {
  console.log('Question #2');
  var items = products.items;
  var results = [];

  Object.keys(items).forEach(function(key) {
    var item = items[key].product;
    if (item.inventories[0].availability === param) {
      results.push(item.title);
    }
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

    // WRITING TO RESULT.JSON
    jsonfile.writeFile('results.json', writeMe, function(writeErr) {
      if (writeErr) console.error(writeErr);
    });
  }
});
