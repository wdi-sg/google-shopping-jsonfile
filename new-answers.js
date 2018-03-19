var products = require('products.json');

function question1() {
  console.log("Question #1");
  var count = 0;
  var items = products.items;

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  console.log(count);
}

const jsonfile = require('jsonfile');

// const file = 'results.json'

// jsonfile.readFile(file, (err, obj) => {

//   console.dir(obj)
// })