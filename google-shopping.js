//question-difference btwn A and B?
//save title to array, create an empty array and push all titles to array, and then save that array

//Q1. Go through the items and find all results that have kind of shopping#product. Print the count of these results.


//This is the objects file.
const jsonfile = require('jsonfile');

//This is where the results will be stored.
const productsFile = 'products.json';
const artsFile = 'collection.json';

//Extra 3: Define a function that can toggle between productsFile and artsFile
//Your program can take in arguments to search inside on the google shopping json data.
//Refactor your program so that you can use a second (or any) set of json data.
//There is a second json data file included in this repo called collection.json that contains art collection data.
//Your finished program should be able to read from either file depending on user input.


//user can define which json file he/she wants to read, by entering either "products" or "arts"
// if (process.argv[2] === "products") {
//   var fileToggle = productsFile;
// } else if (process.argv[2] === "arts") {
//   var fileToggle = artsFile;
// } else {
//   var fileToggle = artsFile;
// }

//reads the productsFile, and stores it in a variable called obj (WHAT ABOUT ERR?)
jsonfile.readFile(toggleFile,
  function(err, obj) {
    console.dir(obj);
    var count = 0;
    var items = obj.items;
    var results = {};

    // //run a loop to see how many items with # are there
    // for (var index in items) {
    //   if (items[index].kind === "shopping#product") {
    //     count += 1;
    //   }
    // }
    // //add key to result, then assign value to a key
    // results.kindShoppingProduct = count;

    // Q2.Save the title of all items with a backorder availability in inventories.

    // create an empty array to store titles
    // var backorderArray = [];

    // //run a loop to check number of items with backorder status
    // for (var index in items) {
    //     var item = items[index].product;
    //     if (item.inventories[0].availability === "backorder") {
    //       backorderArray.push(item.title);
    //     }
    // }

    // //add key to result, then assign value to a key
    // results.backorderTitle = backorderArray;

    // //Q3. Save the title of all items with more than one image link

    //   var itemsManyImageLinkArray = [];
    //   for (var index in items) {
    //       var item = items[index].product;
    //       if (item.images.length > 1) {
    //         itemsManyImageLinkArray.push(item.title);
    //       }
    //   }
    //   //add key to result, then assign value to a key
    //   results.itemsManyImageLink = itemsManyImageLinkArray;


    // //Q4. Save all "Canon" products in the items (careful with case sensitivity, BUT WHY?).

    //   var canonArray = [];

    //   //run a loop to check number of Canon products
    //   for (var index in items) {
    //       var item = items[index].product;
    //       if (item.brand === "Canon") {
    //         canonArray.push(item.title);
    //       }
    //   }

    //   //add key to result, then assign value to a key
    //   results.canonProducts = canonArray;


    // //Q5. Save all items that have an author name of "eBay" and are brand "Canon".
    // //create an empty array to store titles
    // //   ebayCanonArray = [];

    //   //run a loop to check for products that have author name of "eBay" and are brand "Canon"
    //   for (var index in items) {
    //       var item = items[index].product;
    //       if (item.brand === "Canon" && item.author.name === "eBay") {
    //         ebayCanonArray.push(item.title);
    //       }
    //     }

    //   results.ebayAndCanon = ebayCanonArray;

    // Q6. Save all the products with their brand, price, and an image link

    // productsObject = [];
    // for (var index in items) {
    //     individualProducts = [];
    //     var item = items[index].product;
    //     individualProducts.push(item.brand,item.inventories[0].price,item.images[0].link);
    //     productsObject.push(individualProducts)
    // };

    // results.productsInfo = productsObject;


    //Extra 1: Modify your program so that it will take 2 arguments on the command line, and output associated value from the saved results.json
    //CLARIFY IF THIS IS CORRECT:
    // if (process.argv[2] === "getkey" && process.argv[3] === "backorderTitle") {
    //   console.log(backorderArray);
    // }


    //Extra 4:
    // Write your program so that the argument can take in enough data to create a new item in the array (for either set of data).
    // You also don't have to put a complete (as in the examples) set of data.
    // There are many ways you could format that data, but here is one example with one possible format:
    // node index.js insertgoogleshopping '{ "kind": "typeABC", "etag": "\"Hello\"}'

      if (process.argv[2] === "insertgoogleshopping") {
      var obj = Object.assign(process.argv[3],obj);
      console.log(obj);
      }

    //file name, where you want to store, and FIND OUT WHATS THE LAST ONE
    var resultsFile = 'results.json';
    jsonfile.writeFile(resultsFile, results, function(err) {
      console.error(err)
    });
  });


//Extra 2: Take the google shopping functions exercise: https://github.com/wdi-sg/google-shopping-functions and store the info recorded there into a results.json file.
//Make a key for storing the result of each function.
//TO CLARIFY!


// ------------------------------------------------------

//LEARNING OBJECT.ASSIGN

//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// const object2 =
// Object.assign(
//   {c: 4, d: 5}, object1
//   );

// console.log(object2.c, object2.d);
// // expected output: 3 5
