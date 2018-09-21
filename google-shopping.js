// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'
var products;
jsonfile.readFile(file, function (err, obj){
  products = obj;
});

setTimeout(() => {
  question1()
  question2()
}, 1000);

// jsonfile.readFile(file, function (err, obj) {
//   console.dir(obj)

//   var resultFile = 'result.json'
//   var result = {name: 'JP'}

//   jsonfile.writeFile(resultFile, result, function (err) {
//     console.error(err)
//   });

// });

function question1() {
  console.log("Question #1")
  var count = 0
  var items = products.items

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1
    }
  }
  console.log(count);
}



function question2() {
  console.log("Question #2")
  var resultFile = 'result.json'
  var resultArray = []
  var items = products.items
  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      console.log(item.title)
      resultArray.push(item.title)
    }
  }
  var result = {'titleBackorderInventories': resultArray}
  jsonfile.writeFile(resultFile, result, function(err){
    console.log(err)
  })
}

