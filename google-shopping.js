// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

const resultFile = 'results.json';

// Check if there are any additional commands in the command line, execute if yes
retrieve_output_from_results(resultFile);

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj);

  var result = {name: 'JP'}

  // Question 1 - Find number of items with shopping#product
  var result_after_qns1 = question1(obj, resultFile, result);

  // Question 2 - Save the title of all items with a backorder availability in inventories.
  var result_after_qns2 = question2(obj, resultFile, result_after_qns1);

  // // Question 3 - Save the title of all items with more than one image link.
  var result_after_qns3 = question3(obj, resultFile, result_after_qns2);

  // Question 4 - Save all "Canon" products in the items (careful with case sensitivity).
  var result_after_qns4 = question4(obj, resultFile, result_after_qns3);

  // Question 5 - Save all items that have an author name of "eBay" and are brand "Canon".
  var result_after_qns5 = question5(obj, resultFile, result_after_qns4);

  // Question 6 - Save all the products with their brand, price, and an image link
  question6(obj, resultFile, result_after_qns5);
});

function question1(obj, resultFile, result){
  var item_count= 0;
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].kind == "shopping#product"){
      item_count += 1;
    }
  }
  result["shopping#product_items"] = item_count;
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function question2(obj, resultFile, result){
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.inventories[0].availability == "backorder"){
      result["titleBackorderInventories_" + i] = obj.items[i].product.title;
    }
  }
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function question3(obj, resultFile, result){
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.images.length > 1){
      result["titleImageLinks_" + i] =obj.items[i].product.title;
    }
  }
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function question4(obj, resultFile, result){
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.brand === "Canon"){
      result["CanonProducts_" + i] = obj.items[i];
    }
  }
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function question5(obj, resultFile, result){
  for (var i=0; i<obj.items.length; i++){
    if (obj.items[i].product.brand === "Canon" && obj.items[i].product.author.name === "eBay"){
      result["author_eBay_canon_brand_" + i] = obj.items[i];
    }
  }
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function question6(obj, resultFile, result){
  // var all_products = [];
  for (var i=0; i<obj.items.length; i++){
    var individual_product = {};
    individual_product["title"] = obj.items[i].product.title;
    individual_product["brand"] = obj.items[i].product.brand;
    individual_product["price"] = obj.items[i].product.inventories[0].price;
    for (var a=0; a<obj.items[i].product.images.length; a++){
      individual_product["link " + (a+1)] = obj.items[i].product.images[a].link;
    }
    result["products_title_brand_price_" + i] = individual_product
    // all_products.push(individual_product);
  }
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });
  return result;
}

function retrieve_output_from_results(resultFile){
  if (process.argv.length > 2) {
    var command = process.argv[2];
    var key = process.argv[3];

    jsonfile.readFile(resultFile, function(err, obj){
      console.dir("Value of " + key + " = " + obj[key]);
    });
  }
}
