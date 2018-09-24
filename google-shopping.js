console.log("This works")

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

// QUESTION 1
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var count = 0;
  var items = obj.items;

  for (var index in items) {
      if (items[index].kind === "shopping#product") {
        count += 1;
      }
    }

    var resultFile = 'result.json'
    var result = {}
    result["count"]= count;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });


});

QUESTION 2

const jsonfile = require('jsonfile');

const file = 'products.json'

  jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var items = obj.items;

  for (var index in items) {
      var item = items[index].product;
      if (item.inventories[0].availability === "backorder") {
        // console.log(item.title);
      }

    }

    var resultFile = 'result.json'
    var result = {}
    result["title"]= item.title


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });


});

QUESTION 3

const jsonfile = require('jsonfile');

const file = 'products.json'

  jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var items = obj.items;

      console.log("Question #3");
      for (var index in items) {
        var item = items[index].product;
        if (item.images.length > 1) {
          console.log(item.title);
        }
    }

    var resultFile = 'result.json'
    var result = {}
    result["title"]= item.title


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });


});


  QUESTION 4

    var canonArray = [];

       //run a loop to check number of Canon products
       for (var index in items) {
           var item = items[index].product;
           if (item.brand === "Canon") {
             canonArray.push(item.title);
           }
       }

       results.canonProducts = canonArray;



Question 5

ebayCanonArray = [];

       for (var index in items) {
           var item = items[index].product;
           if (item.brand === "Canon" && item.author.name === "eBay") {
             ebayCanonArray.push(item.title);
           }
         }

       results.ebayAndCanon = ebayCanonArray;


Question 6

productsObject = [];
     for (var index in items) {
         individualProducts = [];
         var item = items[index].product;
         individualProducts.push(item.brand,item.inventories[0].price,item.images[0].link);
         productsObject.push(individualProducts)
     };

     results.productsInfo = productsObject;




