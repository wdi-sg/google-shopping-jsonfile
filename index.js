//This is the JSON file package to use here.
const foo = require('jsonfile');

//This is the objects file.
const products = 'products.json' //

//This is where the results will be stored.
const results = 'results.json'

//Setting a count variable to count items retrieved.
var count = 0;

//Part 1a: Go through and find results that have kind of shopping#product.
// var shoppingProduct = function(err, products){
//   for (i = 0; i < products.items.length; i++) {
//     var item = products.items[i];
//     var itemName = item.product.title;
//     if (item.kind == "shopping#product") {
//       count++;
//       resultsOutput.push(itemName);
//       console.log(resultsOutput);
//     }
//   }
//   var resultsAdd = {"Items with kind of shoppingProduct: ": resultsOutput};
//   foo.writeFile(results, resultsAdd, function(err){
//     console.log(err)
//   });
// };

// foo.readFile(products, shoppingProduct)


//(Use thie format): Part 1a: Go through and find results that have kind of shopping#product.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.kind == "shopping#product") {
      count++;
      resultsOutput.push(itemName);
      console.log(resultsOutput);
    }
  }
  var resultsAdd = {"Items with shopping product in kind: ": resultsOutput};
  foo.writeFile(results, resultsAdd, (err) => {
  console.log(err);
  });
})

//Part 1b: Go through object and save the title of all items with a backorder availability in inventories.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.product.inventories[0].availability === "backorder") {
      count++;
      resultsOutput.push(itemName);
      console.log(resultsOutput);
    }
  }
  var resultsAdd = {"Items with backorder availability:": resultsOutput};
  foo.writeFile(results, resultsAdd, (err) => {
  console.log(err);
  });
})

//Part 1c: Save the title of all items with more than one image link.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    if (item.product.images.length > 1) {
      count++;
      resultsOutput.push(itemName);
      console.log(resultsOutput);
    }
  }
  var resultsAdd = {"Items with more than one image link: ": resultsOutput};
  foo.writeFile(results, resultsAdd, (err) => {
  console.log(err);
  });
})

//Part 1d: Save all "Canon" products in the items.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    if (itemBrand === "canon") {
    count++;
    resultsOutput.push(itemName);
    console.log(resultsOutput);
    }
  }
  var resultsAdd = {"Canon products: ": resultsOutput};
  foo.writeFile(results, resultsAdd, (err) => {
  console.log(err);
  });
})

// Part 1e: Save all items with an author name of "eBay" and are brand "Canon".
foo.readFile(products, (err, products) => {
  var authorBrand = [];
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var authorName = item.product.author.name.toLowerCase();
    if (itemBrand === "canon" && authorName === "ebay") {
    count++;
    authorBrand.push(itemName);
    }
  }
  var canonEbay = {"Canon items with eBay author: ": authorBrand};
  foo.writeFile(results, canonEbay, (err) => {
  console.log(err);
  });
})

//Part 1f: Save all items with their brand, price and an image link.
foo.readFile(products, (err, products) => {
  var threeFactors = [];
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var price = item.product.inventories[0].price;
    var imageLink = item.product.images[0].link;
    count++;
    threeFactors.push(itemName);
  }
  var brandPriceImage = {"Items with brand,price and image link: ": threeFactors};
  foo.writeFile(results, threeFactors, (err) => {
    console.log(err);
  })
})




