// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'


jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj);

  var resultFile = 'results.json';
  var result = {name: 'JP'};

  // console.log(obj.items.length);


  // qn 1
  var count = 0;

  for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].kind == "shopping#product") {
		count++;
	};
};

	// console.log(count);

	result["shopping#product"] = count;


	// qn 2
	var titleBackorder = [];

	for (let i=0; i<obj.items.length; i++) {
		if (obj.items[i].product.inventories[0].availability == "backorder") {
			titleBackorder.unshift(obj.items[i].product.title);
		}
	}
	// console.log(titleBackorder);
	result["titleBackorder"] = titleBackorder;

	// qn 3
	var titleImageLink = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.images.length > 1) {
		titleImageLink.unshift(obj.items[i].product.title);
	}
}
	// console.log(titleImageLink);
	result["moreThanOneImageLink"] = titleImageLink;

	// qn 4

	var canonProducts = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.brand == "Canon") {
		canonProducts.unshift(obj.items[i].product.title);
	}
}	
	// console.log(canonProducts);
	result["canonProducts"] = canonProducts;

	// qn 5

	var itemsAuthorEbayCanon = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.brand == "Canon") {
		if (obj.items[i].product.author.name == "eBay") {
			itemsAuthorEbayCanon.unshift(obj.items[i].product.title);
		}
	}
}
// 	console.log(itemsAuthorEbayCanon);
	result["itemsAuthorEbayCanon"] = itemsAuthorEbayCanon;

	// qn 6

	var allProducts = [];
	for (let i=0; i<obj.items.length; i++) {

	allProducts.unshift("Image Link: " + obj.items[i].product.link);

	allProducts.unshift("Price: " + obj.items[i].product.inventories[0].price);
	
	allProducts.unshift("Brand: " + obj.items[i].product.brand);

}

	// console.log(allProducts);
	result["allProducts"] = allProducts;


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
