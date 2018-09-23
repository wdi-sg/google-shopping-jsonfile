// Write your solutions below

var jsonfile = require('jsonfile');
var file = 'products.json';


var result = {};

// 1. Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

jsonfile.readFile(file, function(err, obj) {

  var count = 0;
  var items = obj.items;

  for (i in items) {
    if (items[i].kind === "shopping#product") {
      count += 1;
    }
  }

  var resultFile = 'results.json'
  result["Qn1. Number of shopping#product items"] = count;
  // result["one"] = count;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// 2. Save the `title` of all items with a `backorder` availability in `inventories`.

jsonfile.readFile(file, function(err, obj) {

  var titles = [];
  var items = obj.items

  for (i in items) {
    if (items[i].product.inventories[0].availability === "backorder") {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = 'results.json'
  result["Qn2. Titles on backorder"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// 3. Save the `title` of all items with more than one image link.

jsonfile.readFile(file, function(err, obj) {

  var titles = [];
  var items = obj.items

  for (i in items) {
    if (items[i].product.images.length > 1) {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = 'results.json'
  result["Qn3. Titles with >1 image"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// 4. Save all "Canon" products in the items (careful with case sensitivity).

jsonfile.readFile(file, function(err, obj) {

  var titles = [];
  var items = obj.items

  for (i in items) {
    if (items[i].product.brand === "Canon") {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = 'results.json'
  result["Qn4. All Canon products"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// 5. Save all `items` that have an author name of "eBay" and are brand "Canon".

jsonfile.readFile(file, function(err, obj) {

  var titles = [];
  var items = obj.items

  for (i in items) {
    if (items[i].product.brand === "Canon" && items[i].product.author.name.toLowerCase().includes("ebay")) {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = 'results.json'
  result["Qn5. All Canon products from eBay"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// 6. Save all the products with their **brand**, **price**, and an **image link**

jsonfile.readFile(file, function(err, obj) {

  var items = obj.items
  var allProducts = [];

  for (i in items) {
    var eachProduct = {
      "Title": items[i].product.title,
      "Brand": items[i].product.brand,
      "Price": items[i].product.inventories[0].price,
      "Image link": items[i].product.images[0].link,
      };

  allProducts.push(eachProduct);
  };

  var resultFile = 'results.json'
  result["Qn6. All products (brand, price, image link)"] = allProducts;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


// ## Extra:

// Modify your program so that it will take 2 arguments on the command line, and output associated value from the saved `results.json`.
// For example, for deliverable #2 above -- "Save the title of all items with a backorder availability in inventories."
// you might have stored that result under a key called: `titleBackorderInventories`.
// So now, if you ran `node google-shopping.js getkey titleBackorderInventories`,
// you should see the result being output to Terminal.

setTimeout(function(){

  for (i = 2; i < process.argv.length; i++) {

    console.log(result[process.argv[i]]);

    };

}, 100);


// ## Extra:
// Your program can take in arguments to search inside on the google shopping json data.
// Refactor your program so that you can use a second (or any) set of json data.
// There is a second json data file included in this repo called `collection.json` that contains art collection data.
// Your finished program should be able to read from either file depending on user input.

// See: program.js


// ## Extra:
// Write your program so that the arugment can take in enough data to create a new item in the array (for either set of data).
// You also don't have to put a complete (as in the examples) set of data.
// There are many ways you could format that data, but here is one example with one possible format:
// node index.js insertgoogleshopping '{ "kind": "shopping#products", "etag": "\"kSuBj73OPkN9HtEsYnzpddO-iYI/Xtf9O47gfjxyM3i-AgbqXTkcxTM\"}'

// See: program.js













