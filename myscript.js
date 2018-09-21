
// Checking to see if products.js has been run
console.log(products);

  var kind = "shopping#products";

// Creating variable that counts number of items that have kind = shopping#product
  var count1 = 0;

// Going through all 25 items on the list
for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].kind = "shopping#products"){
    count1++;
  }
}

// Printing the count of how many items have kind = shopping#product
  console.log("Number of items with kind = shopping#products = " + count1);

// Separating the different parts of the exercise for easy viewing
console.log("-");

// Creating variable to count the number of items which availability = backorder
  var count2 = 0;

for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.inventories[0].availability === "backorder"){
    count2++
// Printing out title of all items where availability = backorder
    console.log(products.items[i].product.title);
  }
}

// Separater for easy viewing
console.log("-");


console.log("Number of items with availability = backorder = " + count2);

console.log("-");

for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.images.length > 1){

// Printing out title of all items where there is more thn one image link
    console.log(products.items[i].product.title);
  }
}

console.log("-");

for ( var i = 0; i < products.items.length; i++ ){
  if (products.items[i].product.brand === "Canon"){

// Printing the title of Canon products
    console.log(products.items[i].product.author.name);
  }
}

console.log("-");

for ( var i = 0; i < products.items.length; i++ ){
    if (products.items[i].product.brand === "Canon" && products.items[i].product.author.name === "eBay"){

// Printing title of items that have an author name of "eBay" and are brand "Canon"
    console.log(products.items[i].product.title);
  }
}



for ( var i = 0; i < products.items.length; i++ ){

/**
// Printing brand
  console.log(products.items[i].product.brand)

// Printing price
  console.log(products.items[i].product.inventories[0].price)

// Printing image link
  console.log(products.items[i].product.images[0].link);
*/

// Combining into a sentence
  console.log("Brand = " + products.items[i].product.brand + " Price: " + products.items[i].product.inventories[0].price + " Image link: " + products.items[i].product.images[0].link);

  }








