// Write your solutions below
console.log(process.argv)
const jsonfile = require('jsonfile');
const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)
  var resultFile = 'result.json'
  var result = {name: 'JP'}
  var counter = 0;
if(process.argv[2]="shopping#product"){
	result['shopping#product']= shoppingProducts();
}
	function shoppingProducts(){
	for(var i=0;i<obj.items.length;i++){
		if(obj.items[i].kind === "shopping#product"){
			counter +=1 ;
		}
	}
	return counter;
}
	var available=[]
	if(process.argv[2]="findAvailability"){
		result["Available Stock"]= availableStock();
	}
	function availableStock(){
	for(var i=0;i<obj.items.length;i++){
		var item=obj.items[i].product
		if(item.inventories[0].availability=='backorder'){
			available.push(item.title)
		}
	}
	return available;
}
	if(process.argv[2]="findByImages"){
		result["multipleImages"]= findByImages();
	}
	function findByImages(){
	var imageHold = []
	for(var i=0;i<obj.items.length;i++){
		var item=obj.items[i].product
		if(item.images.length>1){
			imageHold.push(item.title);
		}
		return imageHold;
	}
}

	if (process.argv[2] = "findByBrand"){
		result["canonProducts"] = findByBrand(process.argv[3]);
	}

	function findByBrand(brandName){
	var prod = [];
		for(var i=0;i<obj.items.length;i++){
			var item=obj.items[i].product
			if(item.brand== brandName){
				prod.push(item.title);
			}
		}
		return prod;
	}
	if(process.argv[2]="ebayCanon"){
		result["ebayCanon"]= both(); 
	}
	function both(){
	var ebayCanon=[]
	for(var i=0;i<obj.items.length;i++){
		var item=obj.items[i].product
		if(item.brand== 'Canon' && item.author.name=='eBay'){
			ebayCanon.push(item.title)
		}
	}
	return ebayCanon;
}
	if(process.argv[2]="all"){
		result["Information"]= total();
	}
	function total(){
	arrayStore=[]	
	for(var i=0;i<obj.items.length;i++){
		var item=obj.items[i].product
		var bpi={
			"brand":item.brand,
			"image":item.images,
			"price":item.inventories[0].price
		}
		arrayStore.push(bpi)
	}
	return arrayStore;
}
// console.dir(availableStock)
// console.dir(counter)
// result["shopping#product"]=counter;	
// result["Available Stock"]=availableStock;
// result["multipleImages"]=multipleImages;

// result["ebay&canon"]=ebayCanon;
result["Items"]=arrayStore;
// console.log(availableStock);
jsonfile.writeFile(resultFile, result, function (err) {
console.error(err)
  });
});
