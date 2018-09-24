// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


//Q1: Go through the items and find all results that have kind of shopping#product.

  var count = 0;
  for (var i = 0; i < items.length; i++) {
   if (items[i].kind  === 'shopping#product') {
  count++
   }
  }
return count;



//Q2:Save the title of all items with a backorder availability in inventories.
var backorder = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.investories[0].availability  === 'backorder') {
    console.log(item.title)
    }
  }
  result backorder();



//Q3: Save the title of all items with more than one image link.
var moreThanOneImage = [];

  for (var  = 0;  < items.length; ++) {
    if (items[i].items.images.length > 1) {
      console.log(image.title)
    }
  }
  return moreThanOneImage;

//Q4: Save all "Canon" products in the items (careful with case sensitivity).
var canonProducts = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].brand.title.canon === 'Canon') {
      console.log(canon.title)
    }
  }
  return canonProducts;



//Q5: Save all items that have an author name of "eBay" and are brand "Canon".
var eBayAndCanon = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].author.name === 'eBay' && items [i].title.brand === 'Canon') {
  console.log(ebayAndCanon)
    }
  }
  return eBayAndCanon;

//Q6: Save all the products with their brand, price, and an image link

 var result = [];
   for (var i = 0; i < items.length; i++) {
     var array = {
       'Brand': items[i].product.brand,
       'Price': items[i].product.inventories[0].price,
       'Image': items[i].product.images[0].link
     }
     info.push(array);
   }
   return result;
