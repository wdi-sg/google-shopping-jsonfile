const jsonfile = require('jsonfile');
const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
// console.dir(obj)

 // qns1
 var count = 0;
 // var items = obj.items;

  for (var i = 0; i < obj.items.length; i++) {
    if(obj.items[i].kind === "shopping#product") {
      count ++;
    }
  }

  var result = {};
  result.count = count;
	
  // qns2
  var title1 = [];

  for (var i = 0; i < obj.items.length; i++) {
  	if(obj.items[i].product.inventories[0].availability === "backorder") {
  		title1.push(obj.items[i].product.title);
  	}
  }
  result.qns2 = title1;

  // qns3
  var title2 = [];

  for (var i = 0; i < obj.items.length; i++) {
  	if(obj.items[i].product.images.length > 1) {
  		title2.push(obj.items[i].product.title);
  	}
  }
  result.qns3 = title2;

  // qns4
  var title3 = [];

  for (var i = 0; i < obj.items.length; i++) {
  	if(obj.items[i].product.brand === "Canon") {
  		title3.push(obj.items[i].product.title);  		
  	}
  }
  result.qns4 = title3;

  // qns5
  var title4 = [];

  for (var i = 0; i < obj.items.length; i++) {
  	if(obj.items[i].product.brand === "Canon" && 
  		obj.items[i].product.author.name.startsWith('eBay')) {
  		title4.push(obj.items[i].product.title);
  	}
  }
  result.qns5 = title4;

  // qns6

  var allProducts = {};
  result.qns6 = [];

  for (var i = 0; i < obj.items.length; i++) {
  	allProducts.title = obj.items[i].product.title;
  	allProducts.brand = obj.items[i].product.brand;
  	allProducts.price = obj.items[i].product.inventories[0].price;
  	allProducts.imgLink = obj.items[i].product.images.link;
  	result.qns6.push(allProducts);
  }


  var resultFile = 'results.json';

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});