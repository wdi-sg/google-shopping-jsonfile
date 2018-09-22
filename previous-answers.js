var products = require('./products.json');
var items = products.items;

module.exports.question1 = function() {
  console.log("Question #1");
  var count = 0;

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  return count;
}

module.exports.question2 = function() {
  console.log("Question #2");
  var allTitles = [];
  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      allTitles.push(item.title);
    }
  }
  return allTitles;
}

module.exports.question3 = function() {
  console.log("Question #3");
  var allTitles = [];
  for (var index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
      allTitles.push(item.title);
    }
  }
  return allTitles;
}

module.exports.question4 = function() {
  console.log("Question #4");
  var allTitles = [];
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      allTitles.push(item.title);
    }
  }
  return allTitles;
}

module.exports.question5 = function() {
  console.log("Question #5");
  var allTitles = [];
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      allTitles.push(item.title);
    }
  }
  return allTitles;
}

module.exports.question6 = function() {
  console.log("Question #6");
  var allProducts = [];
  for (var index in items) {
    var item = items[index].product;
    var Item = {};
    Item.Brand = item.brand;
    Item.Price = item.inventories[0].price;
    Item.Link = item.images[0].link;
    allProducts.push(Item);
  }

  return allProducts;
}
















