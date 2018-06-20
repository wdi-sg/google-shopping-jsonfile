// Write your solutions below
const myjsonfile = require('jsonfile');
const answers = require("./previous-answers.js");

const file = 'products.json';

myjsonfile.readFile(file, function(err, obj) {

  qOne(obj);

  var resultFile = 'result.json';
  var result = { name: 'JP' }

  myjsonfile.writeFile(resultFile, result, function(err) {
    // console.error(err)
  });

});



let qOne = (products) => {
  let counter = 0;
  let items = products.items;

  for (var i in items) {
    if (items[i].kind === "shopping#product") {
      counter += 1;
    }
  }
  console.log(counter);
}
