// Write your solutions below
const jsonfile = require('jsonfile');

const productsFile = 'products.json'

const resultsFile = 'results.json'
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});

jsonfile.readFile(productsFile, (err, obj) => {

  const results = {};
  const objectItemsArr = obj.items;

  //q1
  let shoppingProductCount = 0;
  objectItemsArr.forEach(item => {
    if (item.kind == "shopping#product") {
      shoppingProductCount++;
    }
  })
  results["shoppingProductCount"] = shoppingProductCount;

  //q2
  const backorderTitles = []; 
  objectItemsArr.forEach(item => {
    if (item.product.inventories[0].availability == "backorder") {
      backorderTitles.push(item.product.title);
    }
  })
  results["backorderTitles"] = backorderTitles;

  //q3
  const imageLinksTitles = []; 
  objectItemsArr.forEach(item => {
    if (item.product.images.length > 1) {
      imageLinksTitles.push(item.product.title);
    }
  })
  results["imageLinksTitles"] = imageLinksTitles;

  //q4
  const canonBrandTitles = []; 
  objectItemsArr.forEach(item => {
    if (item.product.brand.toLowerCase() == "canon") {
      canonBrandTitles.push(item.product.title);
    }
  })
  results["canonBrandTitles"] = canonBrandTitles;

  //q5
  const ebayAuthorCanonBrandTitles = []; 
  objectItemsArr.forEach(item => {
    if (item.product.author.name.toLowerCase() == "ebay" && item.product.brand.toLowerCase() == "canon") {
      ebayAuthorCanonBrandTitles.push(item.product.title);
    }
  })
  results["ebayAuthorCanonBrandTitles"] = ebayAuthorCanonBrandTitles;

  //q6
  const brandPriceImageLink = []; 
  objectItemsArr.forEach(item => {
    let itemInfo = {"brand": item.product.brand,
                    "price": item.product.inventories[0].price,
                    "imageLink": item.product.images[0].link
                   };
    brandPriceImageLink.push(itemInfo);
  })
  results["brandPriceImageLink"] = brandPriceImageLink;


  jsonfile.writeFile(resultsFile, results, function (err) {
    console.error(err)
  });

});

let userInput = process.argv[3];
console.dir(process.argv);
jsonfile.readFile(resultsFile, (err, obj) => {
  console.dir(obj[userInput]);
});
