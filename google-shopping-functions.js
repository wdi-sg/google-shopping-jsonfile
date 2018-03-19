
/*
* example function called getItemsCount
* input: accepts full item data
* output: returns the length of the items array
*/
function getItemsCount(itemData) {
  return itemData.items.length;
}

// 1) Create a function called getItems that simply returns the items array from the google product object.
function getItems(itemData) {
  return itemData.items;
  // return itemData['items'];
}

`2) Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.`
function getItemsByBrand(items, brand) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['brand'] == brand) res.push(item);
  }
  return res;
}


`3) Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.`
function getItemsByAuthor(items, author) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['author']['name'].includes(author)) res.push(item);
  }
  return res;
}

`4) Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)`
function getAvailableProducts(items) {
  var res = [];
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    if (item['product']['inventories'][0]['availability'] == 'inStock') res.push(item);
  }
  return res;
}

`5) Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
All items made by Sony.
All items made by Sony that are available.
All available items by the author "Adorama Camera"
All items made by Nikon with the author eBay.`

// bonus question - I created a function that returns the total number of image links on a page
function numImageLinks(items) {
  var count = 0;
  for (var i=0;i<items.length;i++) {
    var item = items[i];
    count += item['product']['images'].length;
  }
  return count;
}

// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)

  var resultFile = 'results.json';
  var result = {};
  var items = getItems(obj);
  result["items"] = items;
  result["sonyItems"] = getItemsByBrand(items, 'Sony');
  result["pictureLine"] = getItemsByAuthor(items, "pictureline.com");
  result["available"] = getAvailableProducts(items);

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
