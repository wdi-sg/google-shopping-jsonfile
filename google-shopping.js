//  GLOBAL VARIABLES
var jsonfile = require('jsonfile');
var productsFile = 'products.json';

//  DELIVERABLES
//  QUESTION 1
function getShoppingProducts(products) {
  console.log('Question #1');
  var count = 0;
  var items = products.items;

  Object.keys(items).forEach(function(key) {
    if (items[key].kind === 'shopping#product') count += 1;
  });

  console.log(count);
}

// QUESTION 2


jsonfile.readFile(productsFile, function (err, obj) {
  if (err) {
    console.error(err);
  } else {
    getShoppingProducts(obj);
  }
});
