// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj);

  var resultFile = 'result.json'

  // Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
  var items_filtered = obj.items.filter( item => item.kind === "shopping#product");
  var result = { itemsCount : items_filtered.length};

  // Save the title of all items with a backorder availability in inventories.
  // obj.items.forEach(function(x) {console.log(x.product.inventories);});
  var items_filtered = obj.items.filter( item => item.product.inventories[0].availability === "backorder");
  var result = { itemsBackorder : items_filtered};

  // Save the title of all items with more than one image link.
  var items_filtered = obj.items.filter( item => item.product.images.length > 1);
  var result = { moreThanOne : items_filtered};

  // Save all "Canon" products in the items (careful with case sensitivity).
  var items_filtered = obj.items.filter( item => item.product.brand.toLowerCase().includes('canon'));
  var result = { canon : items_filtered};

  // Save all items that have an author name of "eBay" and are brand "Canon".
  var items_filtered = obj.items.filter( item => item.product.brand.toLowerCase().includes('canon') && item.product.author.name.toLowerCase().includes('ebay'));
  var result = { canon_eBay : items_filtered};

  // Save all the products with their brand, price, and an image link
  // ---> each product an object with attributes
  var items_filtered = [];
  obj.items.forEach(function(item) {
    newObj = {
      brand: item.product.brand,
      price: item.product.inventories[0].price,
      imageLink: item.product.images[0].link,
    };
    items_filtered.push(newObj);
  });

  var result = { products : items_filtered};

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
