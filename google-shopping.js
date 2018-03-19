const jsonfile = require('jsonfile');

const file = 'products.json'

// qn1: count of 'shopping#product'
jsonfile.readFile(file, (err, obj) => {

	var numOfShopPro = obj.items.length;
	var count = 0;

	for(var i=0; i<numOfShopPro; i++) {
		if(obj.items[i].kind === "shopping#product") {
			count++;
		}
	}

	console.log("The count of 'shopping#product' is " + count);
});

// qn2: backorder in inventories
jsonfile.readFile(file, (err, obj) => {

	var item = obj.items;

	for(var i=0; i<item.length; i++) {
		if(item[i].product.inventories[0].availability === "backorder") {
			console.log("The items with 'backorder' in inventories are " + item[i].product.title);
		}
	}
});

// qn3: more than one image link
jsonfile.readFile(file, (err, obj) => {

	var item = obj.items;

	for(var i=0; i<item.length; i++) {
		if(item[i].product.images.length > 1) {
			console.log("The items with more than one image link are " + item[i].product.title);
		}
	}
});

// qn4: Canon products
jsonfile.readFile(file, (err, obj) => {

	var item = obj.items;

	for(var i=0; i<item.length; i++) {
		if(item[i].product.brand === "Canon") {
			console.log("The Canon products are " + item[i].product.title);
		}
	}
});

// qn5: Canon products with eBay author
jsonfile.readFile(file, (err, obj) => {

	var item = obj.items;

	for(var i=0; i<item.length; i++) {
		if(item[i].product.author.name.includes("eBay") == true && item[i].product.brand === "Canon") {
			console.log("The Canon products with eBay author are " + item[i].product.title);
		}
	}
});

// qn6: brand, price and image
jsonfile.readFile(file, (err, obj) => {

	var item = obj.items;

	for(var i=0; i<item.length; i++) {
		console.log("The brand is " + item[i].product.brand);
		console.log("The price is " + item[i].product.inventories[0].price);
		console.log("The image link is " + item[i].product.images[0]);
	}
});
