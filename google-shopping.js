// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
//  console.dir(obj)

var productsList = obj.items;
var count = 0;
var backOrdersOutput= [];
var backOrderCounter = 0;
var imgOutput = [];
var imgCounter= 0;
var brandOutput = [];
var brandCounter= 0;
var authorOutput = [];
var authorCounter= 0;
var fullListOutput = [];
var fullListCounter= 0;



for(i = 0; i <= productsList.length -1; i++){

//find count of shopping#product
if( productsList[i].kind == "shopping#product"){
	count++;
}

// display items with backorders
if (productsList[i].product.inventories){
	var inventory = productsList[i].product.inventories[0];
	if (inventory.availability == "backorder"){
		backOrderCounter++;
		backOrdersOutput.push(backOrderCounter + ". "+ productsList[i].product.title);

	}
}

// display items with more than 1 link
if (productsList[i].product.images)
{
	imgCounter = 0;
	var img = productsList[i].product.images;
	for(j = 0; j < img.length ; j++){
		imgCounter++;
	}

	if(imgCounter > 1){
		imgOutput.push(productsList[i].product.title);
	}



}

// find all Canon brand
if (productsList[i].product.brand){
	if (productsList[i].product.brand == "Canon"){
		brandCounter++;
		brandOutput.push(brandCounter+ ". "+ productsList[i].product.title);

	}
}

// find all Canon brand and from eBay
if (productsList[i].product.brand && productsList[i].product.author.name){
	if (productsList[i].product.brand == "Canon" && productsList[i].product.author.name == "eBay"){
		authorCounter++;
		authorOutput.push(authorCounter+ ". "+ productsList[i].product.title);

	}
}


// find full list with brand, price and image
fullListCounter++;
fullListOutput.push([fullListCounter+ ". "+ productsList[i].product.title , "Brand: " + productsList[i].product.brand ,"Price: " + productsList[i].product.inventories[0].price  ,"Image: " + productsList[i].product.images[0].link]);	





}




  var resultFile = 'result.json'
  var result = {
"The titles of those with Canon brand from Ebay are :" : authorOutput,
"The number of items with shopping#product is" : count,
"The titles of the backorders are" : backOrdersOutput,
"The titles of those with more than 2 images are" : imgOutput,
"The titles of those with Canon brand are" : brandOutput,
"The titles of those with Canon brand from Ebay are" : authorOutput,
"The titles, brands, price and images of the products are " : fullListOutput,
}

  jsonfile.writeFile(resultFile, result, function (err) {
 //   console.error(err)
  });

});
