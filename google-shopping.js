// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {

  var resultFile = 'result.json';

  // get all products with shopping#products
  let productCount = 0;
  obj.items.forEach(item => {
    if (item.kind === 'shopping#product') {
      productCount++;
    }
  });

  // get all product titles with backorder availability 
  let backOrderProducts = [];
  obj.items.forEach(item => {
    let { availability } = item.product.inventories[0];
    let { title } = item.product;
    if (availability === 'backorder' ) {
      backOrderProducts.push(title);
    }
  });


  // get all product titles with more than one image link
  let productsWithMoreThanOneImage = [];
  obj.items.forEach(item => {
    let { title, images } = item.product; 
    if (images.length > 1) {
      productsWithMoreThanOneImage.push(title);
    }
  });

  // get all Canon products
  let canonProducts = [];
  obj.items.forEach(item => {
    let { brand, title } = item.product;
    if (brand.toLowerCase() === 'canon') {
      canonProducts.push(item);
    }
  });

  // get all canon products sold by ebay
  let ebayCanon = [];
  obj.items.forEach(item => {
    let { brand } = item.product;
    let { name } = item.product.author;
    if ( name.toLowerCase().includes('ebay') && brand.toLowerCase() === 'canon') {
      ebayCanon.push(item);
    }
  });

  let filteredDetailsItems = [];
  obj.items.forEach(item => {
    let { brand } = item.product;
    let { price, shipping } = item.product.inventories[0];
    let image = item.product.images[0];
    let itemDetails = {
      brand : brand,
      price: price,
      shipping: shipping,
      imageLink: image
    };
    filteredDetailsItems.push(itemDetails);
  });

  let results = {
    productCount : productCount,
    backOrderResult: backOrderProducts,
    productsWithMoreThanOneImage: productsWithMoreThanOneImage,
    canonProducts: canonProducts,
    ebayCanon: ebayCanon,
    filteredDetailsItems: filteredDetailsItems
  };

  jsonfile.writeFile(resultFile, results, (err) => {
    // console.log(err);
    if (process.argv[2] === 'getKey') {
      console.log(results[process.argv[3]]);
    }
  });

  // setTimeout(() => {
  //   let resultJson = JSON.parse(resultFile);
  //   console.log(resultJson[process.argv[2]]);
  // }, 4000);
  
});
