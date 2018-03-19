// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj);

  var resultFile = 'results.json'
  var result = {name: 'JP'}

  // Question 1 - Find number of items with shopping#product
  let item_num = question1(obj);
  result["shopping#product_items"] = item_num;
  console.log("Found number of items with kind shopping#products");

  // Question 2 - Save the title of all items with a backorder availability in inventories.
  let titles_array = question2(obj);
  for (var i = 0; i < titles_array.length; i++) {
    result["titleBackorderInventories_" + i] = titles_array[i];
    console.log("Running for loop");
  }
  console.log("Found title of items with a backorder availability");

  // Question 3 - Save the title of all items with more than one image link.
  let image_links_array = question3(obj);
  for (var i = 0; i < image_links_array.length; i++) {
    result["titleImageLinks_" + i] = image_links_array[i];
  }
  console.log("Found title of items more than one image link");

  // Question 4 - Save all "Canon" products in the items (careful with case sensitivity).
  let canon_products_array = question4(obj);
  // console.log(canon_products_array);
  for (var i = 0; i < canon_products_array.length; i++) {
    result["CanonProducts_" + i] = canon_products_array[i];
  }
  console.log("Found title of items that are of canon brand");

  // Question 5 - Save all items that have an author name of "eBay" and are brand "Canon".
  let author_ebay_canon_products = question5(obj);
  // console.log(author_ebay_canon_products);
  for (var i = 0; i < author_ebay_canon_products.length; i++) {
    result["author_eBay_canon_brand_" + i] = author_ebay_canon_products[i];
  }
  console.log("Found items that are of eBay author and canon product");

  // Question 6 - Save all the products with their brand, price, and an image link
  let all_products_array = question6(obj);
  for (var i = 0; i < all_products_array.length; i++) {
    result["products_title_brand_price_" + i] = all_products_array[i];
  }
  console.log("Found all items with their respective title, brand and price");

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});

function question1(obj){
  var item_count= 0;
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].kind == "shopping#product"){
      item_count += 1;
    }
  }
  return item_count;
}

function question2(obj){
  var title = [];
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.inventories[0].availability == "backorder"){
      title.push(obj.items[i].product.title);
    }
  }
  return title;
}

function question3(obj){
  var qns3_title = [];
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.images.length > 1){
      qns3_title.push(obj.items[i].product.title);
      // console.log("Items with more than one image link: " + products.items[i].product.title);
    }
  }
  return qns3_title;
}

function question4(obj){
  var canon_products = [];
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.brand === "Canon"){
      canon_products.push(obj.items[i]);
    }
  }
  return canon_products;
}

function question5(obj){
  var ebay_canon_products = [];
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.brand === "Canon" && obj.items[i].product.author.name === "eBay"){
      ebay_canon_products.push(obj.items[i]);
    }
  }
  return ebay_canon_products;
}

function question6(obj){
  var all_products = [];
  for (var i=0; i<obj.items.length; i++){
    var individual_product = {};
    individual_product["title"] = obj.items[i].product.title;
    individual_product["brand"] = obj.items[i].product.brand;
    individual_product["price"] = obj.items[i].product.inventories[0].price;
    for (var a=0; a<obj.items[i].product.images.length; a++){
      individual_product["link " + (a+1)] = obj.items[i].product.images[a].link;
    }
    all_products.push(individual_product);
  }
  return all_products;
}
