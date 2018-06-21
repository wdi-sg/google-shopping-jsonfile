// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj.items[0]); // items is an array with all the products
  // console.dir(obj.items[0].kind);

  var resultFile = 'result.json';	// write into this file
  var result = {};

  // PART 1
  result['shoppingProductCount'] = []; //makes an key with 'shoppingProductCount' and the value is an array

  var itemCount = 0;
  for (var i = 0; i < obj.items.length; i++){
     if (obj.items[i].kind === 'shopping#product'){
         itemCount++;
     }
  }
  result['shoppingProductCount'].push(itemCount);



  // PART 2
  result['titleBackorderInventories'] = []; //makes an key with 'titleBackorderInventories' and the value is an array

  for (var i = 0; i < obj.items.length; i++){
    if (obj.items[i].product.inventories[0].availability === 'backorder'){
         result['titleBackorderInventories'].push(obj.items[i].product.title);
     }
  }

  // PART 3
  result['moreThanOneImage'] = []; 

  for (var i = 0; i < obj.items.length; i++){
    if (obj.items[i].product.images.length > 1){
         result['moreThanOneImage'].push(obj.items[i].product.title);
     }
  }

 // PART 4
  result['canonBrand'] = []; 

  for (var i = 0; i < obj.items.length; i++){
    if (obj.items[i].product.brand.toLowerCase() === "canon"){
         result['canonBrand'].push(obj.items[i]);
     }
  }

 // PART 5
  result['canonAndEbay'] = []; 

  for (var i = 0; i < obj.items.length; i++){
	var getAuthor = obj.items[i].product.author["name"].toLowerCase();
	var checkAuthor = getAuthor.includes("ebay") //returns true or false

	var checkBrand2 = obj.items[i].product.brand.toLowerCase();
	
	if (checkAuthor && checkBrand2 === "canon") {
		result['canonAndEbay'].push(obj.items[i]);
	}
  }

  // PART 6
  result['allItems'] = [];

  itemObj = {}; // create an object 

  for (var i = 0; i < obj.items.length; i++){
  	itemObj["brand"] = obj.items[i].product.brand;
  	itemObj["price"] = obj.items[i].product.inventories[0].price;
  	itemObj["images"] = obj.items[i].product.images[0].link;
  	result['allItems'].push(itemObj) //push the obj into the array
  }


// extra 1
// console.log  (  process.argv[2]  );
console.log(  result[process.argv[2]][process.argv[3]]  );




  jsonfile.writeFile(resultFile, result, function (err) {
  	console.error(err)
  });

});




jsonfile.readFile(file, function(err, obj2) {

	var resultFile2 = 'results.json';
	var results = {};




	jsonfile.writeFile(resultFile2, results, function (err) {
  		console.error(err)
  	});

});




