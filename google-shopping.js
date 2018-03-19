// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}

  result["kindOfShoppingProduct"] = [];
  result["titleBackorderInventories"] = [];
  result["titleMoreThanOneImageLink"] = [];
  result["canonProducts"] = [];
  result["itemsEbayCanon"] = [];
  result["allProducts"] =[];
//########################################################################################
  //Q1
  var count = 0;
  for (var i = 0; i < obj.items.length; i++){
  	if (obj.items[i].kind === "shopping#product"){
  		count++;
  		result["kindOfShoppingProduct"].push(count);
  	}
  }
//########################################################################################
  //Q2
  for (var i = 0; i < obj.items.length; i++){
  	if (obj.items[i].product.inventories[0].availability === "backorder"){
  		result["titleBackorderInventories"].push(obj.items[i].product.title);
  	}
  }
//########################################################################################
  //Q3
  for (var i = 0; i < obj.items.length; i++){
  	if (obj.items[i].product.images.length > 1){
  		result["titleMoreThanOneImageLink"].push(obj.items[i].product.title);
  	}
  }
//########################################################################################
  //Q4
  for (var i = 0; i < obj.items.length; i++){
  	if (obj.items[i].product.title.search("Canon") >= 0 ){
  		result["canonProducts"].push(obj.items[i].product.title);
  	}
  }
//########################################################################################
  //Q5
  for (var i = 0; i < obj.items.length; i++){
    if (obj.items[i].product.title.search("Canon") >= 0 && obj.items[i].product.author.name.search("eBay") >= 0){
    result["itemsEbayCanon"].push(obj.items[i].product.title);
    }
}
//########################################################################################
  //Q6
  for (var i = 0; i < obj.items.length; i++){
  	result["allProducts"].push("Brand: " + obj.items[i].product.brand);
  	result["allProducts"].push("Price: " + obj.items[i].product.inventories[0].price);
  	result["allProducts"].push("Image: " +obj.items[i].product.images[0]);
  }



  jsonfile.writeFile(resultFile, result, function (err) {
  	console.error(err)
  });

});

















