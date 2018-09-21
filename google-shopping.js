// Write your solutions below

const jsonfile = require('jsonfile');

const productsFile = 'products.json';


jsonfile.readFile(productsFile, (err, obj) => {
	
	var resultsFile = 'results.json';
	var resultObject = {};	// create result OBJECT to be written inside results.json file
	var item = obj.items;
	
	// Q1
	function question1() {
		let count = 0;

		for(let i=0; i < item.length; i++) {
			if(item[i]['kind'] == 'shopping#product') {
				count ++;
			};
		};

		resultObject['shoppingProductCount'] = count.toString();   // convert answer to string and add to resultsObject
	};

	question1();

	// Q2
	function question2() {
		let titles = [];

		for(var i=0; i < item.length; i++) {
			if(item[i]['product']['inventories'][0]['availability'] == 'backorder') {
				titles.push(item[i]['product']['title']);
			};
		};

		resultObject['titleBackOrderInventories'] = titles;
	};

	question2();


	// Q3
	function question3() {
		let titles = []

		for(let i in item) {
			let itemProduct = item[i]['product'];
			if(itemProduct['images'].length > 1) {
				titles.push(itemProduct['title']);
			};
		};

		resultObject['titleImages'] = titles;
	};

	question3();


	// Q4
	function question4() {
		let titles = [];

		for(let i in item) {
			let itemProduct = item[i]['product'];
			if(itemProduct['brand'].toLowerCase() === 'canon') {
				titles.push(itemProduct['title']);
			};
		};

		resultObject['canonProducts'] = titles;
	};

	question4();

	// Q5
	function question5() {
		let titles = [];

		for(let i in item) {
			let itemProduct = item[i]['product'];
			if(itemProduct['brand'].toLowerCase() === 'canon' && itemProduct['author']['name'] === 'eBay') {
				titles.push(itemProduct['title']);
			};
		};
		resultObject['ebayCanon'] = titles;
	};

	question5();

	// Q6
	function question6() {
		var listArray = [];

		for(let i in item) {
			let itemProduct = item[i]['product'];

			let listObject = {
				itemBrand : itemProduct['brand'],
				itemPrice : itemProduct['inventories'][0]['price'],
				itemImg : itemProduct['images'][0]['link']
			};

			listArray.push(listObject);
		}
		resultObject['summary'] = listArray;
	};

	question6();


	jsonfile.writeFile(resultsFile, resultObject, (err) => {
		console.log(err);
	});
});



