// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'


//Go through the items and find all results that have kind of shopping#product.
//Print the count of these results. Where else is this count information stored in the search results?

// var getShoppingProductCount = function(items) {
//   var count = 0;
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].kind === "shopping#product") {
//       count++;
//     }
//   }
//   return count;
// }

// Save the title of all items with a backorder availability in inventories.

// var getAvailableBackorders = function(items) {
//   var backorderArr = [];
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.inventories[0].availability === "backorder") {
//       backorderArr.push(items[i].product.title);
//     }
//   }
//   return backorderArr;
// }

// Save the title of all items with more than one image link.

// var getItemsWithMultipleImages = function(items) {
//   var multipleImagesArr = [];
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.images.length > 1) {
//       multipleImagesArr.push(items[i].product.title)
//     }
//   }
//   return multipleImagesArr
// }

// Save all "Canon" products in the items (careful with case sensitivity).

// var getCanonProducts = function(items) {
//   var canonArr = [];
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.brand.toLowerCase() === 'canon') {
//       canonArr.push(items[i]);
//     }
//   }
//   return canonArr;
// }

// Save all items that have an author name of "eBay" and are brand "Canon".

// var geteBayAuthors = function(items) {
//   var eBayArr = [];
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.author.name.toLowerCase().includes('ebay') === true) {
//       eBayArr.push(items[i]);
//     }
//   }
//   return eBayArr;
// }

// Save all the products with their brand, price, and an image link

// var getKeyProductInfo = function(items) {
//   var info = [];
//   for (var i = 0; i < items.length; i++) {
//     var array = {
//       "Brand": items[i].product.brand,
//       "Price": items[i].product.inventories[0].price,
//       "Image" : items[i].product.images[0].link
//     }
//     info.push(array);
//   }
//   return info;
// }


// jsonfile.readFile(file, function(err, obj) {
//   // console.dir(obj)

//   var resultFile = 'results.json'
//   var results = {};
//   var items = obj.items;

//   results["ShoppingProductCount"] = getShoppingProductCount(items);
//   results["AvailableBackorders"] = getAvailableBackorders(items);
//   results["ItemsWithMoreThanOneImage"] = getItemsWithMultipleImages(items);
//   results["CanonProducts"] = getCanonProducts(items);
//   results["eBayCanonProducts"] = geteBayAuthors(getCanonProducts(items));
//   results["KeyProductInfo"] = getKeyProductInfo(items);

//   jsonfile.writeFile(resultFile, results, function(err) {
//     console.error(err)
//   });

// });

// Extra 1
//  var resultFile = 'results.json'

// if (process.argv.length>2 ){
//   if (process.argv[2] === "getkey"){
//     jsonfile.readFile(resultFile, function(err, obj) {
//       if(process.argv[3] === undefined){
//         console.log(err);
//       }
//       else{
//         console.log(obj[process.argv[3]]);
//       }
//     });
//   }
// }

// Extra 2
 const previousAnswers = require('./previous-answers')

 jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)

  var resultFile = 'results.json'
  var results = {};
  var items = obj.items;

  results["ShoppingProductCount"] = previousAnswers.question1();
  results["AvailableBackorders"] = previousAnswers.question2();
  results["ItemsWithMoreThanOneImage"] = previousAnswers.question3();
  results["CanonProducts"] = previousAnswers.question4();
  results["eBayCanonProducts"] = previousAnswers.question5();
  results["KeyProductInfo"] = previousAnswers.question6();

  jsonfile.writeFile(resultFile, results, function(err) {
    console.error(err)
  });

});

 // Extra 3

// if (process.argv.length>2 ){
//   const file = process.argv[2] + ".json"

//       jsonfile.readFile(file, function(err, obj) {
//       if(process.argv[3] === undefined){
//         console.log(err);
//       }
//       else{
//         console.log(obj[process.argv[3]]);
//       }
//     });
// }

// Extra 4
// var file
// if (process.argv.length>2 ){
// var results = process.argv[2];

//   if (process.argv[2] === "insertgoogleshopping"){
//     file = 'products.json';
//     jsonfile.readFile(file, (err, obj) => {

//   obj['items'].push(JSON.parse(process.argv[3]));

//   jsonfile.writeFile(file, obj, (err) => {
//     console.log(err)
//   });
// });
//   }else if(process.argv[2] === "insertartcollection"){
//     file = 'collection.json';
//     jsonfile.readFile(file, (err, obj) => {

//   obj['artObjects'].push(JSON.parse(process.argv[3]));

//   jsonfile.writeFile(file, obj, (err) => {
//     console.log(err)
//   });
// });
//   }


// }

