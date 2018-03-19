// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

var question = function (obj) {
	
	var items = obj.items
	var newList = []
	// var brandCanonFromEbay = [];

	for (var i = 0; i < items.length; i++) {
		newList.push("Brand: " + items[i].product.brand);
		newList.push("Price: " + items[i].product.inventories[0].price);
		newList.push("Link: " + items[i].product.images[0].link)
		}

	return newList;
	}

	


jsonfile.readFile(file, function(err, obj) {
	// console.dir(obj)

	var resultFile = 'result.json';
	
	var result = question(obj); 

	jsonfile.writeFile(resultFile, result, function (err) {
		console.error(err)
	});

});
