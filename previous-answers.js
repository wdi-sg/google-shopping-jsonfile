module.exports = {
  question1: question1,
  question2: question2,
  question3: question3,
  question4: question4,
  question5: question5,
  question6: question6
}
// var products = require('./products.json');

function question1(products) {
  console.log("Question #1");
  var count = 0;
  var items = products.items;

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  console.log(count);
}

function question2(products) {
  console.log("Question #2");
  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      console.log(item.title);
    }
  }
}

function question3(products) {
  console.log("Question #3");
  for (var index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
      console.log(item.title);
    }
  }
}

function question4(products) {
  console.log("Question #4");
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      console.log(item.title);
    }
  }
}

function question5(products) {
  console.log("Question #5");
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      console.log(item.title);
    }
  }
}

function question6(products) {
  console.log("Question #6");
  for (var index in items) {
    var item = items[index].product;
    console.log("Brand: " + item.brand);
    console.log("Price: " + item.inventories[0].price);
    console.log("Link: " + item.images[0].link);
  }
}
