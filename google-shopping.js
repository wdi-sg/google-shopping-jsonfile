const jsonfile = require('jsonfile');
const functions = require('./functions.js');

jsonfile.readFile(process.argv[2], function(err, obj) {

  var resultFile = 'result.json';
  var result = {};

  // Extra 3:
  if (process.argv[2] === 'products.json') {
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

    result["apple"] = "banana";

  } else if (process.argv[2] === 'collection.json') {
    var items = obj.artObjects;

    // For Extra 3 since collections.json uses diff syntax from products.json
    result["titlesList"] = functions.listTitles(items);

  } else {
    var items = obj;
  }

  // Extra 1 & Extra 4:
  if (process.argv[3] === "getkey") {
    var key = process.argv[4];
    console.log(result[key]);
  } else if (process.argv[3] === "insertdata") {
    var key = process.argv[4];
    var value = process.argv[5];
    result[key] = value;
  }

  jsonfile.writeFile(resultFile, result, function (err) {
    if (err) {
      console.error(err)
    }
  });

});

// Extra 2:
jsonfile.readFile('products.json', function(err, obj) {

  var resultFile = 'results.json';
  var result = {};
  var items = obj.items;

  var madeBySony = functions.getByBrand(items, 'Sony');
  result["allSony"] = madeBySony;
  result["availableSony"] = functions.getAvailable(madeBySony);
  result["byAdoramaCamera"] = functions.getByAuthor(items, "Adorama Camera");
  var byNikon = functions.getByBrand(items, 'Nikon');
  result["eBayNikon"] = functions.getByAuthor(byNikon, "eBay");

  jsonfile.writeFile(resultFile, result, function (err) {
    if (err) {
      console.error(err)
    }
  });

});
