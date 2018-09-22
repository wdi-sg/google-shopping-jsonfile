const prevSolutions = require('./previous-answers.js');

// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';
var resultFile = 'results.json';

// jsonfile.readFile(file, function(err, obj) {
//   console.dir(obj)

//   var result = {name: 'JP'}
//   result["count"] = prevSolutions.question1();
//   result["titleBackorderInventories"] = prevSolutions.question2();
//   result["titleWithMoreThanOneImage"] = prevSolutions.question3();
//   result["allCanonBrands"] = prevSolutions.question4();
//   result["eBayWithBrandCanon"] = prevSolutions.question5();
//   result["allProducts"] = prevSolutions.question6();

//   jsonfile.writeFile(resultFile, result, function (err) {
//     console.error(err)
//   });

// });

// jsonfile.readFile(resultFile, function(err, obj) {

//   console.log(obj);

// });

if (process.argv.length > 2) {

  if (process.argv[2] === "getkey") {

    var keyName = process.argv[3];

    jsonfile.readFile(resultFile, function(err, obj) {

      if (keyName === undefined) {

        console.log(obj);

      } else {

        console.log(obj[keyName]);

      }

    });

  }
}

if (process.argv[2] !== "getkey" && process.argv[2] !== "insertgoogleshopping" && process.argv[2] !== "insertart") {

  var fileToRead = process.argv[2];

  if (fileToRead.includes(".json") === false ) {

    fileToRead += ".json";
  }

  jsonfile.readFile(fileToRead, function(err, obj) {

    console.log(obj);

  });

}

if (process.argv[2] === "insertgoogleshopping") {

  var accessFile = file;

  jsonfile.readFile(accessFile, function(err, obj) {

    obj["items"].push(JSON.parse(process.argv[3]));

    jsonfile.writeFile(accessFile, obj, function(err) {

      console.log(err);

    });

  });

} else if (process.argv[2] === "insertart") {

  accessFile = 'collection.json';

  jsonfile.readFile(accessFile, function(err, obj) {

    obj["artObjects"].push(JSON.parse(process.argv[3]));

    jsonfile.writeFile(accessFile, obj, function(err) {

      console.log(err);

    });

  });

}









