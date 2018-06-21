// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'


jsonfile.readFile(file, function(err, obj) {
	const items = obj.items;
	const resultFile = 'results.json';
 	let result = {};

 	
 	// Deliverable 1
 	function shoppingProduct() {
 		let counter = 0;
  		for (let i = 0; i < items.length; i++) {
  			if (items[i].kind === "shopping#product") {
  				counter += 1;
  			}
  		}
  		result.shoppingProduct = counter;
 	}

 	shoppingProduct();

 
 	// Deliverable 2
 	function backorder() {
 		let backorderItems = [];
 		for (let i = 0; i < items.length; i++) {
 			if (items[i].product.inventories[0].availability  === 'backorder') {
 				backorderItems.push(items[i].product.title);
 			}
 		}
 		result.backorder = backorderItems;
 	}

 	backorder();


 	// Deliverable 3
 	function moreThanOneImage() {
 		let arrayResult = [];
 		for (let i = 0; i < items.length; i++) {
 			if ( (items[i].product.images).length > 1) {
 				arrayResult.push(items[i].product.title);
 			}
 		}
 		result.moreThanOneImage = arrayResult;
 	}

 	moreThanOneImage();


 	// Deliverable 4
 	function canonProducts() {
 		let arrayResult = [];
 		for (let i = 0; i < items.length; i++) {
 			if ( (items[i].product.brand).toLowerCase() === 'canon') {
 				arrayResult.push(items[i].product.title);
 			}
 		}
 		result.canonProducts = arrayResult;
 	}

 	canonProducts();
 

 	// Deliverable 5
 	function eBayCanon() {
 		let arrayResult = [];
 		for (let i = 0; i < items.length; i++) {
 			if ( (items[i].product.brand).toLowerCase() === 'canon' && (items[i].product.author.name).toLowerCase().includes('ebay') ) {
 				arrayResult.push(items[i].product.title);
 			}
 		}
 		result.eBayCanonProducts = arrayResult;
 	}

 	eBayCanon();


 	// Deliverable 6
 	function filterAllProducts() {
 		let arrayResult = [];
 		for (let i = 0; i < items.length; i++) {
 			let objectItem = {};
 			objectItem.brand = items[i].product.brand;
 			objectItem.price = '$' + items[i].product.inventories[0].price;
 			objectItem.imageLink = items[i].product.images[0].link;
 			arrayResult.push(objectItem);
 		}
 		result.filterAllProducts = arrayResult;
 	}

 	filterAllProducts();


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
