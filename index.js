//This is the JSON file package to use here.
const foo = require('jsonfile');

//This is the objects file.
const products = 'products.json' //

//This is where the results will be stored.
const results = 'results.json'

//Setting a count variable to count items retrieved.
var count = 0;

//Create a new object to hold all results.
var allSearchResults = {};

//Part 1a: Go through and find results that have kind of shopping#product.
// var shoppingResults = [];
// var shoppingProduct = function(err, products){
//   // var shoppingResults = [];
//   for (i = 0; i < products.items.length; i++) {
//     var item = products.items[i];
//     var itemName = item.product.title;
//     if (item.kind == "shopping#product") {
//       count++;
//       console.log(count);
//       shoppingResults.push(itemName);
//       console.log(shoppingResults);
//     }
//   }
     // allSearchResults.shoppingProductKind = shoppingResults;
//   foo.writeFile(results, allSearchResults, function(err){
//     console.log(err)
//   });
// };

// foo.readFile(products, shoppingProduct)

// (Use thie format): Part 1a: Go through and find results that have kind of shopping#product.
var shoppingResults = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.kind == "shopping#product") {
      shoppingResults.push(itemName);
    }
  }
  allSearchResults.shoppingProductsKind = shoppingResults;
  foo.writeFile(results, allSearchResults, (err) => {
    console.log(err);
  });
})


//Part 1b: Go through object and save the title of all items with a backorder availability in inventories.
var backorder = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.product.inventories[0].availability === "backorder") {
      backorder.push(itemName);
    }
  }
  allSearchResults.backorderAvailability = backorder;
  foo.writeFile(results, allSearchResults, (err) => {
  console.log(err);
  });
})

// Part 1c: Save the title of all items with more than one image link.
var images = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.product.images.length > 1) {
      images.push(itemName);
    }
  }
  allSearchResults.imageLink = images;
  foo.writeFile(results, allSearchResults, (err) => {
  console.log(err);
  });
})

//Part 1d: Save all "Canon" products in the items.
var canonBrand = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    if (itemBrand === "canon") {
    canonBrand.push(itemName);
    }
  }
  allSearchResullts.productsCanon = canonBrand;
  foo.writeFile(results, allSearchResults, (err) => {
  console.log(err);
  });
})

Part 1e: Save all items with an author name of "eBay" and are brand "Canon".
var authorBrand = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var authorName = item.product.author.name.toLowerCase();
    if (itemBrand === "canon" && authorName === "ebay") {
    authorBrand.push(itemName);
    }
  }
  allSearchResults.productsCanonEbay = authorBrand;
  foo.writeFile(results, allSearchResults, (err) => {
  console.log(err);
  });
})

//Part 1f: Save all items with their brand, price and an image link.
var threeFactors = [];
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var price = item.product.inventories[0].price;
    var imageLink = item.product.images[0].link;
    threeFactors.push(itemName);
  }
  allSearchResults.brandPriceImage = threeFactors;
  foo.writeFile(results, allSearchResults, (err) => {
    console.log(err);
  })
})





