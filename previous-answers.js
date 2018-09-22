var products = require('./products.json');
  var items = products.items;


exports.question1 = function() {
  console.log("Question #1");
  var count = 0;

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  //console.log(count);
  return count;
}

exports.question2 = function() {
  console.log("Question #2");
  var arr=[]
  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      arr.push(item.title);
    }
  } return arr
}

exports.question3 = function() {
  console.log("Question #3");
  var arr=[]
  for (var index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
      arr.push(item.title);
    }
  }return arr
}

exports.question4 = function() {
  console.log("Question #4");
  var arr=[]
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      arr.push(item.title);
    }
  }return arr
}

exports.question5 = function() {
  console.log("Question #5");
  var arr =[]
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      arr.push(item.title);
    }
  }return arr
}

exports.question6 = function() {
  console.log("Question #6");
  var info =[]
  for (var index in items) {
    var item = items[index].product;
    var obj =
    {"Brand" : item.brand,
    "Price" : item.inventories[0].price,
    "Link" : item.images[0].link}
    info.push(obj);
  }return info
}


