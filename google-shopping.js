// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

//console.log(process.argv[0]);

jsonfile.readFile(file, function(err, obj) {
  
  //console.dir(obj)

  var resultFile = 'results.json'
  
  //empty result object
  var result = {};
  
  //q1
  //product counter variable----side note can/should i use const instead of var for these type of variables?
  var count = 0;
  
  	for (var i = 0; i < obj.items.length; i ++) {
    	if (obj.items[i].kind === "shopping#product") {
      		count += 1;
    	}
  	}
  
  //value of shoppingProducts key is equal to count
  result.shoppingProducts = count

  //q2
  //empty array required to push multiple results
  var backorder = [];

  for (var i = 0; i < obj.items.length; i ++ ) {
    if (obj.items[i].product.inventories[0].availability === "backorder") {
      backorder.push(obj.items[i].product.title);
    }
  }
  //value of backorder key is equal to titles in backorder array
  result.backorder = backorder

  //q3
  //empty array required to push multiple results
  var manyImageProducts = [];

  for (var i = 0; i < obj.items.length; i ++ ) {
    if (obj.items[i].product.images.length > 1) {
      manyImageProducts.push(obj.items[i].product.title);
    }
  }

  //value of manyImageProducts key is equal to titles in manyImageProducts array
  result.manyImageProducts = manyImageProducts

  //q4
  //empty array required to push multiple results
  var canonProducts = [];


  for (var i = 0; i < obj.items.length; i ++ ) {
    if (obj.items[i].product.brand  === "Canon") {
      canonProducts.push(obj.items[i].product.title);
    }
  }

  //value of canonProducts key is equal to titles in canonProducts array
  result.canonProducts = canonProducts

  //q5
  //empty array required to push multiple results
  var canonEbay = [];

  for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.brand === "Canon" && obj.items[i].product.author.name === "eBay") {
      canonEbay.push(obj.items[i].product.title);
    }
  }

  //value of canonProductsSoldOneBay key is equal to titles in canonEbay array
  result.canonProductsSoldOneBay = canonEbay;

  //q6
  var productSummary=[];

  for (var i = 0; i < obj.items.length; i++) {
  	productSummary[i] = 
  	{ 	brand: obj.items[i].product.brand,
    	price: obj.items[i].product.inventories[0].price,
    	images: obj.items[i].product.images[0].link }

  }
  result.productSummary = productSummary
  
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
