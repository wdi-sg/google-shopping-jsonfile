const jsonfile = require('jsonfile');
const resultsFile = 'results.json';

module.exports.deliverablesOne = function(items) {
  let count = 0;
  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  return count;
};

module.exports.deliverablesTwo = function(items) {
  let result = [];

  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      result.push(item.title);
    }
  }
  return result;
};

module.exports.deliverablesThree = function(items) {
  let result = [];

  for (var index in items) {
    var item = items[index].product;

    if (item.images.length > 1) {
      result.push(item.title);
    }
  }
  return result;
};

module.exports.deliverablesFour = function(items) {
  let result = [];

  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      result.push(item.title);
    }
  }
  return result;
};

module.exports.deliverablesFive = function(items) {
  let result = [];

  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      result.push(item.title);
    }
  }

  return result;
};

module.exports.deliverablesSix = function(items) {
  let result = [];

  for (var index in items) {
    let holderArray = [];

    var item = items[index].product;
    holderArray.push("Brand: " + item.brand, "Price: " + item.inventories[0].price, "Link: " + item.images[0].link)

    result.push(holderArray);
  }

  return result;
}

module.exports.bonusFunction = function() {
  if (process.argv.length > 2) {
      let key = process.argv[3]

      jsonfile.readFile(resultsFile, (err, obj) => {
        if (obj[key] !== undefined) {
            console.log(obj[key]);
        } else {
            console.log("No Such Key");
            console.log("Available Keys are: " + Object.keys(obj));
        }
      });
  };
};
