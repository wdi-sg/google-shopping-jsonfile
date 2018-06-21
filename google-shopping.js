// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}

  result['shoppingProductKind'] = [];
  result['backorderInventories'] = [];
  result['moreThanOneLink'] = [];
  result['canonProducts'] = [];
  result['ebayAndCanon'] = [];
  result['allProducts'] =[];

// 1)

  var itemCount = 0;
  for (var i = 0; i < obj.items.length; i++) {
  	if (obj.items[i].kind == 'shopping#product') {
  		itemCount++;
  		// result['shoppingProductKind'].push(itemCount);
  	}
  }
  result['shoppingProductKind'].push(itemCount);
// 2)

  for (var i = 0; i < obj.items.length; i++) {
  	if (obj.items[i].product.inventories[0].availability == 'backorder') {
  		result['backorderInventories'].push(obj.items[i].product.title);
  	}
  }
// 3)

  for (var i = 0; i < obj.items.length; i++) {
  	if (obj.items[i].product.images.length > 1) {
  		result['moreThanOneLink'].push(obj.items[i].product.title);
  	}
  }
// 4)

  for (var i = 0; i < obj.items.length; i++) {
  	if (obj.items[i].product.title.search('Canon') >= 0 ) {
  		result['canonProducts'].push(obj.items[i].product.title);
  	}
  }

// 5)

// mine might be wrong
  for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.title.search('Canon') >= 0 && obj.items[i].product.author.name.search('eBay') >= 0) {
    result['ebayAndCanon'].push(obj.items[i].product.title);
    }
};

// jodi help

// for (var i = 0; i < obj.items.length; i++){
//   var getAuthor = obj.items[i].product.author["name"].toLowerCase();
//   var checkAuthor = getAuthor.includes("ebay") //returns true or false

//   var checkBrand2 = obj.items[i].product.brand.toLowerCase();
  
//   if (checkAuthor && checkBrand2 === "canon") {
//     result['ebayAndCanon'].push(obj.items[i]);
//   }
//   };

// 6)

  for (var i = 0; i < obj.items.length; i++) {
  	result['allProducts'].push('Brand: ' + obj.items[i].product.brand);
  	result['allProducts'].push('Price: $' + obj.items[i].product.inventories[0].price);
  	result['allProducts'].push('Image: ' +obj.items[i].product.images[0]);
  };



  jsonfile.writeFile(resultFile, result, function (err) {
  	console.error(err)
  });

});

// sabrina's code


// var two = process.argv[2];
// var three = process.argv[3];
  
//   jsonfile.readFile('./result.json', function(err, obj) {
//     console.log(obj[two][three]);
//   })





