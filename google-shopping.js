// Write your solutions below
const jsonfile = require("jsonfile");

const file = "products.json";

// Filters are specially meant for filtering results (as their name implies!), so we just use filters on the array of items and then push the results into an array. Write all these utility functions first, then finally call them to get the desired result inside the callback on reading the data.
function countShoppingProducts(data) {
	return data["items"].filter((item) => {return item["kind"] == "shopping#product"}).length;
}

function getBackOrderedTitles(data) {
	let result = [];
	data["items"].filter((item) => {
		return item["product"]["inventories"][0]["availability"] === "backorder"
	}).forEach((item) => {
		result.push(item["product"]["title"]);
	});
	return result;
}

function getTitlesWithMultipleImages(data) {
	let result = [];
	data["items"].filter((item) => {
		return item["product"]["images"].length > 1
	}).forEach((item) => {
		result.push(item["product"]["title"]);
	});
	return result;
}

function getTitlesOfBrand(data, brand) {
	let result = [];
	data["items"].filter((item) => {
		return item["product"]["brand"].toLowerCase().includes(brand.toLowerCase());
	}).forEach((item) => {
		result.push(item["product"]["title"]);
	});
	return result;
}

function getTitlesOfAuthorAndBrand(data, author, brand) {
	let result = [];
	data["items"].filter((item) => {
		return (item["product"]["brand"].toLowerCase().includes(brand.toLowerCase()) && item["product"]["author"]["name"].toLowerCase().includes(author.toLowerCase()));
	}).forEach((item) => {
		result.push(item["product"]["title"]);
	});
	return result;
}

function saveTitlesWithBrandPriceImage(data) {
	let result = [], newObj = {};
	data["items"].forEach((item) => {
		newObj["title"] = item["product"]["title"];
		newObj["brand"] = item["product"]["brand"];
		newObj["price"] = item["product"]["inventories"][0]["price"];
		newObj["image"] = item["product"]["images"][0]["link"];
		result.push(newObj);
		newObj = new Object();
	})
	return result;
}

jsonfile.readFile(file, function(err, obj) {

  let resultFile = "result.json";
  
  let countOfShoppingProduct = countShoppingProducts(obj);
  let inventoriesBackOrderedTitles = getBackOrderedTitles(obj);
  let inventoriesMultipleImageTitles = getTitlesWithMultipleImages(obj);
  let brandCanon = getTitlesOfBrand(obj, "Canon");
  let itemsEbayCanon = getTitlesOfAuthorAndBrand(obj, "eBay", "Canon");
  let summaryResults = saveTitlesWithBrandPriceImage(obj);
  
  let result = { "name": "JP",
				 "countOfShoppingProduct": countOfShoppingProduct,
				 "backorderedTitles": inventoriesBackOrderedTitles,
				 "TitlesWithMultipleImages": inventoriesMultipleImageTitles,
				 "CanonStuff": brandCanon,
				 "EbayCanonStuff": itemsEbayCanon,
				 "SummaryResults": summaryResults
				};

	// Detect if the 2nd argument implies that we have to get some key to output.
	if (process.argv[2] === "getkey") {
		let key = process.argv[3];
		if (result.hasOwnProperty(key)) {
			console.log(result[key]);
		} else {
			console.log("Valid keys are: \n1. countOfShoppingProduct\n2. backorderedTitles \n3. TitlesWithMultipleImages\n4. CanonStuff\n5. EbayCanonStuff\n6. SummaryResults");
		};
	};
	jsonfile.writeFile(resultFile, result, function(err) {
	  console.error(err);
	});
});

