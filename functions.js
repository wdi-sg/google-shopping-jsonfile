module.exports.countShoppingProducts = function (items) {
  var count = 0;

  for (var i = 0; i < items.length; i++) {
    if (items[i].kind === "shopping#product") {
      count++;
    }
  }
  return count;
}

module.exports.getBackorderItems = function (items) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "backorder") {
      result.push(items[i].product.title);
    }
  }
  return result;
}

module.exports.getMultipleImages = function (items) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.images.length > 1) {
      result.push(items[i].product.title);
    }
  }
  return result;
}

module.exports.getByBrand = function (items, brand) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
      result.push(items[i]);
    }
  }
  return result;
}

module.exports.getByAuthor = function (items, author) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
      result.push(items[i]);
    }
  }
  return result;
}

module.exports.listItems = function (items) {
  var result = [];

  for (var i in items) {
    var eachItem = {};
    eachItem["Title"] = items[i].product.title;
    eachItem["Brand"] = items[i].product.brand;
    eachItem["Price"] = items[i].product.inventories[0].price;
    eachItem["Image"] = items[i].product.images[0].link;
    result.push(eachItem);
  }
  return result;
}

module.exports.listTitles = function (items) {
  var result = [];

  for (var i in items) {
    result.push(items[i].title);
  }
  return result;
}
