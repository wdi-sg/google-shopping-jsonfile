const myjsonfile = require('jsonfile');
// const answers = require("./previous-answers.js");

const file = 'products.json';

myjsonfile.readFile(file, function(err, obj) {

  var resultFile = 'result.json'
  var result = {
    "shoppingProducts": findShoppingProducts(obj),
    "backorderAvailability": findBackorderAvailability(obj),
    "manyImageLinks": findManyImageLinks(obj),
    "canonItems": findCanonItems(obj),
    "ebayCanon": findEbayCanon(obj),
    "allProducts": findAllProducts(obj)
  }

  myjsonfile.writeFile(resultFile, result, function(err) {
    // console.error(err)
  });

});


let findShoppingProducts = (products) => {
  let counter = 0;
  let items = products.items;

  for (let i in items) {
    if (items[i].kind === "shopping#product") {
      counter += 1;
    }
  }
  // console.log(counter);
  return counter;
}

let findBackorderAvailability = (products) => {
  let items = products.items;
  let backorderItems = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      backorderItems.push(item.title);
    }
  }
  // console.log(backorderItems);
  return backorderItems;
}

let findManyImageLinks = (products) => {
  let items = products.items;
  let moreThanOneLink = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.images.length > 1) {
      moreThanOneLink.push(item.title);
    }
  }
  // console.log(moreThanOneLink);
  return moreThanOneLink;
}

let findCanonItems = (products) => {
  let items = products.items;
  let canonItems = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon") {
      canonItems.push(item.title);
    }
  }
  // console.log(canonItems);
  return canonItems;
}

let findEbayCanon = (products) => {
  let items = products.items;
  let ebayCanon = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      ebayCanon.push(item.title);
    }
  }
  // console.log(ebayCanon);
  return ebayCanon;
}

let findAllProducts = (products) => {
  let items = products.items;
  let allProducts = [];
  for (let index in items) {
    let item = items[index].product;
    allProducts[index] = {
      "Brand": item.brand,
      "Price": item.inventories[0].price,
      "Link": item.images[0].link
    }

  }
  // console.log(allProducts);
  return allProducts;
}
