// Write your solutions below
const jsonfile = require('jsonfile');
const file = 'products.json'

var items
var resultFile = 'results.json'
var result = {}
var products

//EXTRA 1
jsonfile.readFile(resultFile, function(err,obj) {
  console.log(obj[process.argv[2]])
})

//DELIVERABLES
// jsonfile.readFile(file, function (err, obj) {
//   products = obj
//   items = products.items
//   question1()
//   question2()
//   question3()
//   question4()
//   question5()
//   question6()
//   jsonfile.writeFile(resultFile, result, function (err) {})
// })

function question1() {
  console.log("Question #1")
  var count = 0

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1
    }
  }
  console.log(count);
}

function question2() {
  console.log("Question #2")
  var resultArray = []

  for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      console.log(item.title)
      resultArray.push(item.title)
    }
  }
  result['titleBackorderInventories'] = resultArray
}

function question3() {
  console.log("Question #3");
  var resultArray = []
  for (var index in items) {
    var item = items[index].product;
    if (item.images.length > 1) {
      console.log(item.title)
      resultArray.push(item.title)
    }
  }
  result["titleMoreOneImage"] = resultArray
}

function question4() {
  console.log("Question #4");
  var resultArray = []
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon") {
      console.log(item.title);
      resultArray.push(item.title)
    }
  }
  result["cannonProducts"] = resultArray
}

function question5() {
  console.log("Question #5");
  var resultArray = []
  for (var index in items) {
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      console.log(item.title);
      resultArray.push(item.title)
    }
  }
  result["cannonEbayProducts"] = resultArray
}

function question6() {
  console.log("Question #6");
  var resultArray = []

  for (var index in items) {
    var item = items[index].product;
    console.log("Brand: " + item.brand);
    console.log("Price: " + item.inventories[0].price);
    console.log("Link: " + item.images[0].link);
    var currentItem = {
      "Brand": item.brand,
      "Price": item.inventories[0].price,
      "Link": item.images[0].link
    }
    resultArray.push(currentItem)
  }
  result['allProducts'] = resultArray
}
