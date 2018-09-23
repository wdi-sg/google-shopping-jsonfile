// Write your solutions below
const jsonfile = require('jsonfile');
const functions = require('./functions.js');
const file = 'products.json';

jsonfile.readFile(process.argv[2], function(err, obj) {

  var resultFile = 'result.json';
  var result = {};

  // Extra 3:
  if (process.argv[2] === 'products.json') {
    var items = obj.items;

    // Q1:
    // result["shoppingProducts"] = functions.countShoppingProducts(items);
    //
    // // Q2:
    // result["backOrderItems"] = functions.getBackorderItems(items);
    //
    // // Q3:
    // result["itemsWithMultipleImages"] = functions.getMultipleImages(items);
    //
    // // Q4:
    // var allCanon = functions.getByBrand(items, "Canon")
    // result["allCanon"] = allCanon;
    //
    // // Q5:
    // result["eBayCanon"] = functions.getByAuthor(allCanon, "eBay");
    //
    // Q6:
    result["itemsList"] = functions.listItems(items);

  } else if (process.argv[2] === 'collection.json') {
    var items = obj.artObjects;

    // For Extra 3 since collections.json uses diff syntax from products.json
    result["titlesList"] = functions.listTitles(items);

  }

  // Extra 1:
  if (process.argv[3] === "getkey") {
    var key = process.argv[4];
    console.log(result[key]);
  }

  jsonfile.writeFile(resultFile, result, function (err) {
    if (err) {
      console.error(err)
    }
  });

});
