
var jsonfile = require('jsonfile');
var file;

if (process.argv[2] === 'insertgoogleshopping') {
  file = 'products.json';
} else if (process.argv[2] === 'insertcollection') {
  file = 'collection.json';
} else {file = process.argv[2]};


// ## Extra:
// Your program can take in arguments to search inside on the google shopping json data.
// Refactor your program so that you can use a second (or any) set of json data.
// There is a second json data file included in this repo called `collection.json` that contains art collection data.
// Your finished program should be able to read from either file depending on user input.

jsonfile.readFile(file, function(err, obj) {

  var object = obj;

  for (i = 3; i < process.argv.length; i++) {

    object = object[process.argv[i]];
  }

  console.log(object);

});


// ## Extra:
// Write your program so that the arugment can take in enough data to create a new item in the array (for either set of data).
// You also don't have to put a complete (as in the examples) set of data.
// There are many ways you could format that data, but here is one example with one possible format:
// node index.js insertgoogleshopping '{ "kind": "shopping#products", "etag": "\"kSuBj73OPkN9HtEsYnzpddO-iYI/Xtf9O47gfjxyM3i-AgbqXTkcxTM\"}'

// jsonfile.readFile(file, function(err, obj) {

//   var arr = [];
//   arr[0] = obj;

//   var resultFile = process.argv[2];


//   jsonfile.writeFile(resultFile, result, function (err) {
//     console.error(err)
//   });

// });
