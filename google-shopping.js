// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  var resultFile = 'results.json';
  var result = {name: 'JP'};

//Q1
//   var count = 0;
//   for (let i=0; i < obj.items.length; i++) {
//     if (obj.items[i].kind === 'shopping#product') {
//       count ++;
//     }
//   }

//   result['shopping#product'] = count;


//Q2
//   let titleBackorderInventories = [];

//   for (let i=0; i< obj.items.length; i++) {
//     if (obj.items[i].product.inventories[0].availability == 'backorder') {
//       titleBackorderInventories.push(obj.items[i].product.title);
//     }
//   }

//   result['titleBackorderInventories'] = titleBackorderInventories;


//Q3
//   let titleMoreThanOneImageLink = [];

//   for (let i=0; i < obj.items.length; i++) {
//     if (obj.items[i].product.images.length > 1) {
//       titleMoreThanOneImageLink.push(obj.items[i].product.title);
//     }
//   }

//   result['titleMoreThanOneImageLink'] = titleMoreThanOneImageLink;

//Q4
//   let allCanonProducts = [];

//   for (let i=0; i < obj.items.length; i++) {
//     if (obj.items[i].product.brand == 'Canon') {
//       allCanonProducts.push(obj.items[i].product.title);
//     }
//   }

//   result['allCanonProducts'] = allCanonProducts;

//Q5
  // let canonEbayItems = [];

  // for (let i=0; i < obj.items.length; i++) {
  //   if (obj.items[i].product.author.name.indexOf('eBay') >= 0 && obj.items[i].product.brand == 'Canon') {
  //     canonEbayItems.push(obj.items[i]);
  //   }
  // }

  // result['canonEbayItems'] = canonEbayItems;

//Q6
  // let brandPriceImagelinkProducts = [];

  // for (let i=0; i < obj.items.length; i++) {
  //   brandPriceImagelinkProducts.push(obj.items[i].product.brand, obj.items[i].product.inventories[0].price, obj.items[i].product.images);
  //   // brandPriceImagelinkProducts.push(obj.items[i].product.inventories[0].price);
  //   // brandPriceImagelinkProducts.push(obj.items[i].product.images);
  // }

  // result['brandPriceImagelinkProducts'] = brandPriceImagelinkProducts;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});
