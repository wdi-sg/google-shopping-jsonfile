// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {

	/////////////////////////////////
	// SOLUTION HERE               //
	/////////////////////////////////
	//Objective 1
	var count = 0;

	for (var i = 0; i < obj.items.length; i++){
		if (obj.items[i].kind === "shopping#product"){
			count++;
		}
	}

	var result = {};
	result.count = count;

	//Objective 2
	var title2 = [];

	for (var i = 0; i < obj.items.length; i++){
		if (obj.items[i].product.inventories[0].availability === "backorder"){
			title2.push(obj.items[i].product.title);
		}	
	}
	result.objective2 = title2;

	//Objective 3
	var title3 = [];
	for (var i = 0; i < obj.items.length; i++){
		if (obj.items[i].product.images.length > 1){
			title3.push(obj.items[i].product.title);
		}	
	}
	result.objective3 = title3;


	//Objective 4
	var title4 = [];
	for (var i = 0; i < obj.items.length; i++){
		if (obj.items[i].product.brand === "Canon"){
			title4.push(obj.items[i].product.title);
		}
	}
	result.objective4 = title4;

	//Objective 5
	var title5 = [];
	for (var i = 0; i < obj.items.length; i++){
		if (obj.items[i].product.brand === "Canon" && obj.items[i].product.author.name.startsWith('eBay')){
			title5.push(obj.items[i].product.title);
		}
	}
	result.objective5 = title5;

	//Objective 6

	var finalObj = {};
	result.objective6 = [];
	for (var i = 0; i < obj.items.length; i++){
			finalObj.title = obj.items[i].product.title;
			finalObj.brand = obj.items[i].product.brand;
			finalObj.price = obj.items[i].product.inventories[0].price;
			finalObj.imgLink = obj.items[i].product.images.link;
	
			result.objective6.push(finalObj);
	}
	
	/////////////////////////////////
	// START OF WRITE              //
	/////////////////////////////////

	var resultFile = 'results.json'

	jsonfile.writeFile(resultFile, result, function (err) {
		console.error(err)
	});

});
