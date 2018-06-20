module.exports.deliverablesOne = function(items){
	// 1. Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?
	let count = 0;
	for (var index in items) {
 		if (items[index].kind == "shopping#product") {
		count ++;
		}
	}
	return count;
};

module.exports.deliverablesTwo = function(items){
// 2. Save the `title` of all items with a `backorder` availability in `inventories`.
	let list=[];
	for(var index in items){
		if(items[index].product.inventories[0].availability=="backorder"){
			list.push(items[index].product.title);
		}
	}
	return list
};
module.exports.deliverablesThree = function(items){
// 3. Save the `title` of all items with more than one image link.
	let list=[];
	for(var index in items){
		if(items[index].product.images.length>=1){
			list.push(items[index].product.title);
		}
	}
	return list
}
module.exports.deliverablesFour = function(items){
// 4. Save all "Canon" products in the items (careful with case sensitivity).
	let list=[];
	for(var index in items){
		if(items[index].product.brand=="Canon"){
			list.push(items[index].product.title);
		}
	}
	return list
}
module.exports.deliverablesFive = function(items){
// 5. Save all `items` that have an author name of "eBay" and are brand "Canon".
	let list=[];
	for(var index in items){
		if(items[index].product.author.name=="eBay" && items[index].product.brand=="Canon"){
			list.push(items[index].product.title);
		}
	}
	return list	
}
module.exports.deliverablesSix = function(items){
// 6. Save all the products with their **brand**, **price**, and an **image link**
	let results=[];
	for(var index in items){
		results.push("Brand: " + items[index].product.brand);
		results.push("Price: " + items[index].product.inventories[0].price);
		var links=[];
		for(let i = 0; i<items[index].product.images.length; i++){
			var each = items[index].product.images[i].link
			links.push(each);
		}
		results.push("Links: " + links);
	}
	return results
}
