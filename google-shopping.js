// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'



jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)

  var resultFile = 'result.json'
  var result= {}


  //Question 1
  var count = 0

  for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].kind === "shopping#product") {
      count += 1;
    }
  }


  //Question 2
  var inventories =[]


  for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.inventories[0].availability === "backorder") {
      inventories.push(obj.items[i].product.title)
    }
  }


  //Question 3
  var titles = []

   for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.images.length > 1) {
      titles.push(obj.items[i].product.title);
    }
  }

  //Question 4
  var canonProducts = []

   for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.brand === "Canon") {
      canonProducts.push(obj.items[i].product.title);
    }
  }


  //Question 5

  var brandAuthor = []

   for (var i = 0; i < obj.items.length; i++) {
    if (obj.items[i].product.brand === "Canon" && obj.items[i].product.author.name === "eBay") {
      brandAuthor.push(obj.items[i].product.title);
    }
  }

  //Question 6

  var brandPriceImage = []


   for (var i = 0; i < obj.items.length; i++) {
    brandPriceImage.push({"brand" : obj.items[i].product.brand,
                          "item": obj.items[i].product.inventories[0].price,
                          "link": obj.items[i].product.images[0].link})

  }


  result["count"] = count;
  result["inventories"] = inventories
  result["title"] = titles
  result["canonProducts"] = canonProducts
  result["brandAuthor"] = brandAuthor
  result["brandPriceImage"] = brandPriceImage



  //resultFile is the answer file, result is the thing you want to push in
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});

console.log("first")

if (process.argv[2] === "inventories"){
  const result = "result.json"
console.log("second")
  jsonfile.readFile(result, function(err, obj){

    console.log(obj.inventories)
  })


}





