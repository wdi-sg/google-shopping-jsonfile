// Write your solutions below
const jsonfile = require('jsonfile');//is the pkg to read and write

const file = 'products.json'//call the file and save into the var

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
  result = {};//create an empty obj
  var count = 0;
  var items = obj.items;
  var backorderArr = [];
  var morethanOneImgArr = [];
  var allCanonArr = [];
  var ebayCanonArr = [];
  var saveProducts = [];
  var resultFile = 'results.json'//file name which you are writing to


  for (var index in items) {
    //question1
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
    //question2
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      backorderArr.push(item.title);
    }
    //question3
    var item = items[index].product;
    if (item.images.length > 1) {
      morethanOneImgArr.push(item.title);
    }
    //question4
    var item = items[index].product;
    if (item.brand === "Canon") {
      allCanonArr.push(item.title);
    }
    //question5
    var item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      ebayCanonArr.push(item);
    }
    //question6
    var item = items[index].product;
    var currentProduct = {
      "Brand": item.brand,
      "Price": item.inventories[0].price,
      "Link": item.images[0].link
    }
    saveProducts.push(currentProduct);

  }
  result.shoppingList = count;//obj.key = values
  result.backorderInventory = backorderArr;
  result.morethanOneImg = morethanOneImgArr;
  result.allCanonProducts = allCanonArr;
  result.ebayCanonProductItems = ebayCanonArr;
  result.allProducts = saveProducts;


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});
