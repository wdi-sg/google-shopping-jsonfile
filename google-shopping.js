// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}
  var counter = 0;

  	for(var i=0; i<obj.items.length; i++) {
  		if(obj.items[i].kind === “shopping#product”) {
        itemCounter++;
  }
}

result['shoppingProductCount'].push(itemCounter);



result['backOrderAvailability'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.inventories[0].availability == "backorder") {
    result['backOrderAvailability'].push(obj.items[i].product.title);
  }

}



      
result['moreThanOneImg'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.images.length>1){
    result['moreThanOneImg'].push(obj.items[i].product.title);
  }
}


      
      
result['itemsWithCanon'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.brand.toLowerCase() == "canon"){
    result['itemsWithCanon'].push(obj.items[i].product.title);
  }
}


      
      
result['canonAndEbay'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.title.search("Canon") >= 0  && obj.items[i].product.author.name.search("eBay") >= 0) {
    result['canonAndEbay'].push(obj.items[i].product.title);
  }
}
