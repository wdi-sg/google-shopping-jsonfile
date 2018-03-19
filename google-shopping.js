// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)
  obj = obj.items;
  let count = 0;
  let backorderItems = [];
  let itemsWithMultipleImages = [];
  let itemsWithCanon = [];
  let itemsWithCanonEbay = [];
  let itemImages;
  let price;
  let image;
  let getBrandPriceImage = [];
  for (i=0; i<obj.length; i++) {
    if (obj[i].kind === "shopping#product") {
      count += 1;
    }

    // loop thru inventories
    for (j=0; j<obj[i].product.inventories.length; j++){
      if (obj[i].product.inventories[j].availability === "backorder") {
        backorderItems.push(obj[i].product.title);
        break;
      }
    }

    // find items with >1 images
    itemImages = 0;
    for (j=0; j<obj[i].product.images.length; j++){
      // console.log(obj[i].product.images[j]);
      itemImages += 1;
    }
    if (itemImages > 1) {
      itemsWithMultipleImages.push(obj[i].product.title);
    }

    // product with Canon
    if (obj[i].product.brand.toLowerCase() === "canon") {
      itemsWithCanon.push(obj[i]);
      // check if author contains ebay

      if (obj[i].product.author.name.toLowerCase().includes("ebay")) {
        itemsWithCanonEbay.push(obj[i]);
      }
    }

    // brand price and image
    // get price from the first element in the inventories array

    price = (obj[i].product.inventories.length > 0) ? obj[i].product.inventories[0].price : 0;
    image = (obj[i].product.images.length > 0) ? obj[i].product.images[0].link : null;
    // console.log(obj[i].product.brand, price, image);
    getBrandPriceImage.push({
      brand: obj[i].product.brand,
      price,
      image
    }
    );

  }

  // items with backorder


  var resultFile = 'result.json'
  var result = {
    itemsWithShoppingProduct: count,
    backorderItems,
    itemsWithMultipleImages,
    itemsWithCanon,
    itemsWithCanonEbay,
    getBrandPriceImage
  };

  jsonfile.writeFile(resultFile, result, {spaces: 2}, function (err) {
    console.error(err)

    // check process for arguements
    if (process.argv.length === 4) {
      if (process.argv[2] === "getKey") {
        console.log(result[process.argv[3]]);
      }
    }
  });

});
