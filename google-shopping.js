// Write your solutions below
const jsonfile = require('jsonfile');
const functions = require('./functions.js');
const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {

  var resultFile = 'result.json';
  var result = {};

  var items = obj.items;

  // Q1:
  result["shoppingProducts"] = functions.countShoppingProducts(items);

  // Q2:
  result["backOrderItems"] = functions.getBackorderItems(items);

  // Q3:
  result["itemsWithMultipleImages"] = functions.getMultipleImages(items);

  // Q4:
  var allCanon = functions.getByBrand(items, "Canon")
  result["allCanon"] = allCanon;

  // Q5:
  result["eBayCanon"] = functions.getByAuthor(allCanon, "eBay");

  // Q6:
  result["itemsList"] = functions.listItems(items);

  // Extra 1:
  if (process.argv[2]) {
    if (process.argv[2] === "getkey") {
      console.log(result[process.argv[3]]);
    }
  }

  // Extra 2:

  // Extra 3:

  jsonfile.writeFile(resultFile, result, function (err) {
    if (err) {
      console.error(err)
    }
  });

});
