// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

var resultFile = 'results.json';



jsonfile.readFile(file, function(err, obj) {

  
  const result = {};


  // // question 1: shopping#product kind

  // result["shopping#product"] = obj.currentItemCount;



  // // question 2: title of all items with backorder availability in inventories

  // let titles2 = [];
  // for (index in obj.items) {
  //   let item = obj.items[index].product;
  //   if (item.inventories[0].availability === "backorder") {
  //     titles2.push(item.title);
  //   }
  // }
  // result["backorderAvailability"] = titles2;



  // // question 3: title of all items with more than one image link

  // let titles3 = [];
  // for (index in obj.items) {
  //   let item = obj.items[index].product;
  //   if (item.images.length > 1) {
  //     titles3.push(item.title);
  //   }
  // }
  // result["multipleImageLinks"] = titles3;



  // // question 4: "Canon" products

  // let titles4 = [];
  // for (index in obj.items) {
  //   let item = obj.items[index].product;
  //   if (item.brand === "Canon") {
  //     titles4.push(item.title);
  //   }
  // }
  // result["canonBrand"] = titles4;



  // // question 5: "eBay" author and "Canon" brand products

  // let titles5 = [];
  // for (index in obj.items) {
  //   let item = obj.items[index].product;
  //   if (item.brand === "Canon" && item.author.name === "eBay") {
  //     titles5.push(item.title);
  //   }
  // }
  // result["eBayAuthorCanonBrand"] = titles5;



  // // question 6: products brand, price and image link

  // let products = [];
  // for (index in obj.items) {
  //   let item = obj.items[index].product;
  //   let product = {};
  //   product["Brand"] = item.brand;
  //   product["Price"] = item.inventories[0].price;
  //   product["Link"] = item.images[0].link;
  //   products.push(product);
  // }
  // result["productsList"] = products;



  // extra 1: all item titles

  let getItems = obj => {
    let item = obj.items;
    let array = [];
    item.forEach(el => array.push(el.product.title));
    return array;
  }

  // result["allItems"] = getItems(obj);



  // extra 2: get items by brand

  let getItemsByBrand = (obj, brand) => {
    let item = obj.items;
    let array = [];
    item.forEach(el => {
      if (el.product.brand === brand) {
        array.push(el.product.title);
      }
    })
    return array;
  }

  // result["sonyBrand"] = getItemsByBrand(obj, "Sony");
  // result["canonBrand"] = getItemsByBrand(obj, "Canon");
  // result["nikonBrand"] = getItemsByBrand(obj, "Nikon");
  // result["panasonicBrand"] = getItemsByBrand(obj, "Panasonic");



  // extra 3: get items by author

  let getItemsByAuthor = (obj, author) => {
    let item = obj.items;
    let array = [];
    item.forEach(el => {
      if (el.product.author.name === author) {
        array.push(el.product.title);
      }
    })
    return array;
  }

  // result["targetAuthor"] = getItemsByAuthor(obj, "Target");
  // result["cdwAuthor"] = getItemsByAuthor(obj, "CDW");
  // result["ebayAuthor"] = getItemsByAuthor(obj, "eBay");



  // extra 4: get products that are in stocks

  let list = obj.items;
  let getAvailableProducts = item => {
    let array = [];
    item.forEach(el => {
      if (el.product.inventories[0].availability === "inStock") {
        array.push(el.product.title);
      }
    })
    return array;
  }

  // result["availableProducts"] = getAvailableProducts(list);



  // extra 5:

  // all items made by Sony

  const sonyProducts = getItemsByBrand(obj, "Sony");
  result["sonyProducts"] = sonyProducts;

  // all items made by Sony that are available.

  const availableProducts = getAvailableProducts(list);
  const sonyAvailableProducts = [];
  sonyProducts.forEach(el => {
    availableProducts.forEach(el2 => {
      if (el2 === el) {
        sonyAvailableProducts.push(el2);
      }
    })
  })
  result["sonyAvailableProducts"] = sonyAvailableProducts;

  // All available items by the author "Adorama Camera"

  result["adoramaCameraAuthor"] = getItemsByAuthor(obj, "Adorama Camera");

  // All items made by Nikon with the author eBay.

  const nikonBrand = getItemsByBrand(obj, "Nikon");
  const ebayAuthor = getItemsByAuthor(obj, "eBay");
  const nikonBrandEbayAuthor = [];
  nikonBrand.forEach(el => {
    ebayAuthor.forEach(el2 => {
      if (el2 === el) {
        nikonBrandEbayAuthor.push(el2);
      }
    })
  })
  result["nikonBrandEbayAuthor"] = nikonBrandEbayAuthor;



  jsonfile.writeFile(resultFile, result, (err) => {
    console.error(err)
  });

});