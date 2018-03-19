// Write your solutions below
const jsonfile = require('jsonfile');
const file = 'products.json'

jsonfile.readFile(file, (err, obj) => {
	//declare variables
	const itemsList = obj.items;
	let itemListCount = 0;
	let backItemsArray = [];
	let moreImageLinks = [];
	let canonItems = [];
	let ebayCanonItems = [];
	let allItemsSpecific = [];

	for(let i =0;i<itemsList.length;i++){

		const productDetails = itemsList[i].product;
		const productTitle = productDetails.title;
		const inventories = productDetails.inventories;
		const images = productDetails.images;
		const brand = productDetails.brand;
		const authorName = productDetails.author.name;
		const imageLink1 = images[0].link;
		const price = inventories[0].price;

		if(itemsList[i].kind === "shopping#product"){
			itemListCount++
		}
		//searching for title of items with backorder availability
		//note inventories is an array;
		if(inventories[0].availability == "backorder"){
			backItemsArray.push(productTitle);
		}

		//note images is an array that is in the productDetails
		if(images.length>1){
			moreImageLinks.push(productTitle);
		}

		//get "Canon" products
		if(brand == "Canon"){
			canonItems.push(productTitle);
		}

		//get "Canon" products by Ebay
		if(authorName.search("eBay") != -1 && brand == "Canon"){
			ebayCanonItems.push(productTitle);
		}

		//get all products with brand, price and an image link	
		let storeItem = {Product : productTitle,
						price: price, 
						link : imageLink1};
		allItemsSpecific.push(storeItem);
	}
		
	//write objects and store
	var resultFile = 'results.json'
	// var result = {name: 'JP'}
	var result = {
		shoppingProduct : itemListCount,
		titleBackorderInventories : backItemsArray,
		titleMoreImageLinks : moreImageLinks,
		canonProducts : canonItems,
		ebayCanonItems : ebayCanonItems,
		itemsWithBrandImgPrice : allItemsSpecific
	};

	jsonfile.writeFile(resultFile, result, {spaces: 2} ,(err) => {
		console.error(err);
		//if process.argv[2] typed in is getKey
		if(process.argv[2] === "getKey"){
			//get the value for the key inputted i.e.process.argv[3]
			console.log(result[process.argv[3]]);
		};
	});
});
