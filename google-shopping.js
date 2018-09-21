// Write your solutions below
var jsonfile = require('jsonfile');

var file = 'products.json'

var result = {};

// Part 1 print the count of items with kind of shopping#product
jsonfile.readFile(file, function(err, obj) {
  //console.dir(obj)
  var count = 0;

  var resultFile = 'results.json'
  for( var i = 0 ; i < obj.items.length; i++ ) {
    if( obj.items[i].kind == "shopping#product" ) {
      //result[i] = obj.items[i];
      count++
      result["Qn1. Items with kind shopping#product"] = "count: "+count;
    }
  } console.log(count);

   jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });
});

// Part 2
jsonfile.readFile(file, function(err, obj) {

  var titles = [];

  for (i in obj.items) {
    if ( obj.items[i].product.inventories[0].availability === "backorder" ) {
      titles.push( obj.items[i].product.title );
    }
  }

  var resultFile = 'results.json'
  result["Qn2. Titles on backorder"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });
});

// Part 3 title of all items with more than one image link
jsonfile.readFile(file, function(err, obj) {

  var titles = [];
  var items = obj.items

  for (i in items) {
    if (items[i].product.images.length > 1) {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = 'results.json'
  result["Qn3. Titles with >1 image"] = titles;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });
});

// Part 4 save all Canon products in the items
jsonfile.readFile(file, function(err,obj) {

  var titles = [];
  var items = obj.items;

  for ( var i = 0; i < items.length; i++ ) {
    if ( items[i].product.brand === "Canon" ) {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = "results.json";
  result["Qn4. Canon Products"] = titles;

  jsonfile.writeFile(resultFile, result, function(err) {
    console.error(err);
  });
});

// Part 5 eBay and Canon items
jsonfile.readFile(file, function(err,obj) {

  var titles = [];
  var items = obj.items;

  for ( var i = 0; i < items.length; i++ ) {
    if ( items[i].product.brand === "Canon" && items[i].product.author.name.includes("eBay") ) {
      titles.push(items[i].product.title);
    }
  }

  var resultFile = "results.json";
  result["Qn5. eBay & Canon Products"] = titles;

  jsonfile.writeFile(resultFile, result, function(err) {
    console.error(err);
  });
});

// Part 6 all items brand price and image link
jsonfile.readFile(file, function(err,obj) {

  var items = obj.items;
  var allProducts = [];

  for ( var i = 0; i < items.length; i++ ) {
    var eachProduct = {
      "Title": items[i].product.title,
      "Brand": items[i].product.brand,
      "Price":items[i].product.inventories[0].price,
      "Image link": items[i].product.images[0].link,
    };

  allProducts.push(eachProduct);
  };

  var resultFile = "results.json";
  result["Qn6. All products (brand, price, image link)"] = allProducts;

  jsonfile.writeFile( resultFile, result, function(err) {
    console.error(err)
  });
});





















