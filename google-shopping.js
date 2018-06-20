// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'


jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj);

  var resultFile = 'results.json';
  // var result = {name: 'JP'};

  // console.log(obj.items.length);


  // qn 1
  function question1() {
  var count = 0;

  for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].kind == "shopping#product") {
		count++;
	};
};

	// console.log(count);

	// result["shopping#product"] = count;
	return count;
};

	// qn 2

	function question2() {
	var titleBackorder = [];

	for (let i=0; i<obj.items.length; i++) {
		if (obj.items[i].product.inventories[0].availability == "backorder") {
			titleBackorder.push(obj.items[i].product.title);
		}
	}
	// console.log(titleBackorder);
	// result["titleBackorder"] = titleBackorder;
	return titleBackorder;
}

	// qn 3
	function question3() {
	var titleImageLink = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.images.length > 1) {
		titleImageLink.push(obj.items[i].product.title);
	}
}
	// console.log(titleImageLink);
	// result["moreThanOneImageLink"] = titleImageLink;
	return titleImageLink;
}

	// qn 4
	function question4() {
	var canonProducts = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.brand == "Canon") {
		canonProducts.push(obj.items[i].product.title);
	}
}	
	// console.log(canonProducts);
	// result["canonProducts"] = canonProducts;
	return canonProducts;
}

	// qn 5
	function question5() {
	var itemsAuthorEbayCanon = [];

	for (let i=0; i<obj.items.length; i++) {
	if (obj.items[i].product.brand == "Canon") {
		if (obj.items[i].product.author.name == "eBay") {
			itemsAuthorEbayCanon.push(obj.items[i].product.title);
		}
	}
}
// 	console.log(itemsAuthorEbayCanon);
	// result["itemsAuthorEbayCanon"] = itemsAuthorEbayCanon;
	return itemsAuthorEbayCanon;
};

	// qn 6
	function question6() {
	var allProducts = [];
	for (let i=0; i<obj.items.length; i++) {

	allProducts.push("Brand: " + obj.items[i].product.brand);

	allProducts.push("Price: " + obj.items[i].product.inventories[0].price);
	
	allProducts.push("Image Link: " + obj.items[i].product.link);

}

	// console.log(allProducts);
	// result["allProducts"] = allProducts;
	return allProducts;
};


// combine all functions
	
	var result = {
		"shopping#product" : question1(),
		"titleBackorder" : question2(),
		"titleImageLink" : question3(),
		"canonProducts" : question4(),
		"itemsAuthorEbayCanon" : question5(),
		"allProducts" : question6()
	};

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
