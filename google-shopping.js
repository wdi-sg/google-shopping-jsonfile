const myjsonfile = require('jsonfile');

const answers = require("./previous-answers");

const file = 'products.json';

myjsonfile.readFile(file, function(err, obj) {

  var resultFile = 'result.json'
  var result = {
    "shoppingProducts": answers.question1(obj),
    "backorderAvailability": answers.question2(obj),
    "manyImageLinks": answers.question3(obj),
    "canonItems": answers.question4(obj),
    "ebayCanon": answers.question5(obj),
    "allProducts": answers.question6(obj)
  }

  myjsonfile.writeFile(resultFile, result, function(err) {
    // console.error(err)
  });

});

const arrayOfArgumentValues = process.argv;

if (arrayOfArgumentValues[2] == "getKey") {

    myjsonfile.readFile('result.json', function(err, obj) {
    console.log(obj[arrayOfArgumentValues[3]]);

  })
}
