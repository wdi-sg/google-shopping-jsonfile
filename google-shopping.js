// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'



jsonfile.readFile(file, function(err, obj) {
  console.log(obj)

  var result = {};
  var count = 0;
  var items = obj.items;

// Q1
  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
    result.shoppingProduct = count;
};

// Q2
  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      console.log(item.title);
    }

    result.backOrder = item.title;
};

// Q3
for (var index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
      console.log(item.title);
    }
    result.image = item.title;
  };

// Q4
for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      console.log(item.title);
    }
    result.brand = item.title;
  };

// Q5
for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      console.log(item.title);
    }
  result.brandAndName = item.title;
  };

// Q6
objArray = [];

for (var index in items) {
    var item = items[index].product;
    }

  objArray.push(item.brand);
  objArray.push(item.inventories[0].price);
  objArray.push(item.images[0].link);




  var resultFile = 'results.json'

  jsonfile.writeFile(resultFile, result, function (err) {
  console.error(err)
  });

});
















