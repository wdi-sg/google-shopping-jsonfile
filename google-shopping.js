// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  //console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}


//PART 1
result['shoppingProductCount'] = [];

var itemCounter = 0;
for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].kind == "shopping#product"){
    itemCounter++;
  } 
}

result['shoppingProductCount'].push(itemCounter);

//PART 2

result['backOrderAvailability'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.inventories[0].availability == "backorder") {
    result['backOrderAvailability'].push(obj.items[i].product.title);
  }
  
}


//PART 3
result['moreThanOneImg'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.images.length>1){
    result['moreThanOneImg'].push(obj.items[i].product.title);
  }
}

//PART 4
result['itemsWithCanon'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.brand.toLowerCase() == "canon"){
    result['itemsWithCanon'].push(obj.items[i].product.title);
  }
}

//PART 5
result['canonAndEbay'] = [];

for (let i = 0; i < obj.items.length; i++) {
  if (obj.items[i].product.title.search("Canon") >= 0  && obj.items[i].product.author.name.search("eBay") >= 0) {
    result['canonAndEbay'].push(obj.items[i].product.title);
  }
}

//PART 6
result['brandPriceImg'] = [];

for (let i = 0; i < obj.items.length; i++) {
  result['brandPriceImg'].push('Brand: ' + obj.items[i].product.brand);
  result['brandPriceImg'].push('Price: $' + obj.items[i].product.inventories[0].price);
  result['brandPriceImg'].push('images: '+obj.items[i].product.images[0])
  
};





  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
});




