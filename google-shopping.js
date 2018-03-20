// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
	// console.dir(obj)

// 1)

	let result = {};
	let itemCount = 0;
	obj.items.forEach(function(item) {

		if (item.kind === "shopping#product") {
			itemCount += 1;
			// console.log(itemCount);
		}
	});

// 2)

	result["itemCount"] = itemCount;

	let titleWithBackOrder = [];

	obj.items.forEach(function(item) {

		if (item.product.inventories[0].availability === "backorder") {

			titleWithBackOrder.push(item.product.title);
		}
	});

// 3)

	result["titleWithBackOrder"] = titleWithBackOrder;

	let titleMultipleImage = [];

	obj.items.forEach(function(title) {

		if (title.product.images.length > 1) {

			titleMultipleImage.push(title);
		}
	});

// 4)

	result["titleMultipleImage"] = titleMultipleImage;

	let canonProducts = [];

	obj.items.forEach(function(product) {

		if (product.product.brand.toLowerCase() === "canon") {

			canonProducts.push(product);
		}
	});

// 5)

	result["canonProducts"] = canonProducts;

	let itemCanonFromEbay = [];

	obj.items.forEach(function(item) {

		if (item.product.author.name.toLowerCase() === "ebay" && item.product.brand.toLowerCase() === "canon") {

			itemCanonFromEbay.push(item);
		}
	});

// 6)

	result["itemCanonFromEbay"] = itemCanonFromEbay;

	let brandPriceImage = [];

	obj.items.forEach(function(item) {

		let itemInfo = {
			"brand": item.product.brand,
			"price": item.product.inventories[0].price,
			"image": item.product.images[0].link
		};
		brandPriceImage.push(itemInfo);
	});


	jsonfile.writeFile(resultFile, result, function (err) {
		console.error(err)
	});

});

var userInput = process.argv[2];
var resultFile = 'results.json'
jsonfile.readFile(resultFile, (err,obj) => {

	console.dir(obj[userInput]);

});

