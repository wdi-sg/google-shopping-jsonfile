//This is the JSON file packed to use here.
const foo = require('jsonfile');

//This is the objects file.
const products = 'products.json' //

//This is where the results will be stored.
const results = 'results.json'

//Setting a count variable to count items retrieved.
var count = 0;

//Part 1a: Go through and find results that have kind of shopping#product.
var shoppingProduct = function(err, products){
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    console.log(item.kind);
    if (item.kind == "shopping#product") {
      count++;
      console.log(count);
    }
  }
  foo.writeFile(results, products, function(err){
    console.log(err)
  });
};

foo.readFile(products, shoppingProduct)

//(Use thie format): Part 1a: Go through and find results that have kind of shopping#product.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    console.log(item.kind);
    if (item.kind == "shopping#product") {
      count++;
      console.log(count);
      console.log("Items with shopping#product in kind: " + (itemName));
    }
  }
  foo.writeFile(results, products, (err) => {
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
      console.log(count);
      console.log("Items with backorder availability in inventories: " + (itemName));
    }
  }
  foo.writeFile(results, products, (err) => {
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
      console.log("Items with more than 1 image link: " + (itemName));
    }
  }
  foo.writeFile(results, products, (err) => {
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
    console.log(count);
    console.log("Items with Canon product brand: " + itemName);
    }
  }
  foo.writeFile(results, products, (err) => {
  console.log(err);
  });
})

// //Part 1e: Save all items with an author name of "eBay" and are brand "Canon".
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var authorName = item.product.author.name.toLowerCase();
    if (itemBrand === "canon" && authorName === "ebay") {
    count++;
    console.log(count);
    console.log("Items with Canon brand & eBay author: " + itemName);
    }
  }
  foo.writeFile(results, products, (err) => {
  console.log(err);
  });
})

//Part 1f: Save all items with their brand, price and an image link.
foo.readFile(products, (err, products) => {
  for (i = 0; i < products.items.length; i++) {
    var item = products.items[i];
    var itemName = item.product.title;
    var itemBrand = item.product.brand.toLowerCase();
    var price = item.product.inventories[0].price;
    var imageLink = item.product.images[0].link;
    count++;
    console.log(count);
    console.log("All items with brand, product & price link: " + itemBrand + " " + price + " " + imageLink + ".");
  }
})




