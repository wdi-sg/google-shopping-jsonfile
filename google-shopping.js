// Declaring global variables
const jsonfile = require('jsonfile');
const file = 'products.json'
const resultFile = 'result.json'
var result = {};

//XXXXXXXXXXX READ FUNCTION XXXXXXXX
jsonfile.readFile(file, function(err, obj) {
 
	var items = obj.items;

//Question 1 function
	function question1() {
	  var shoppingProductCount = 0;
	  for (var index in items) {
	    if (items[index].kind === "shopping#product") {
	      shoppingProductCount += 1;
	    }
	  }
	  return shoppingProductCount;
	}

//Question 2 function
	function question2() {
	  for (var index in items) {
	    var item = items[index].product;
	    if (item.inventories[0].availability === "backorder") {
	      return(item.title);
	    }
	  }
	}

//Question 3 function
function question3() {
  for (var index in items) {
    var item = obj.items[index].product;
    if (item.images.length > 1) {
      return(item.title);
    }
  }
}

//Question 4 function
function question4() {
  for (var index in items) {
    var item = obj.items[index].product;
    if (item.brand === "Canon") {
      return(item.title);
    }
  }
}

//Question 5 function
function question5() {
  for (var index in items) {
    var item = obj.items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      return(item.title);
    }
  }
}


//Question 6 function
function question6() {
	var bpaArray = [];

  for (var index in items) {
    var item = obj.items[index].product;
    // console.log("Brand: " + item.brand);
    // console.log("Price: " + item.inventories[0].price);
    // console.log("Link: " + item.images[0].link);

    brandPriceImage = {brand: item.brand, price: item.inventories[0].price, link: item.images[0].link};
    bpaArray.push(brandPriceImage);
  }
		return bpaArray;
}



//XXXXXXXXXXX WRITE FUNCTION XXXXXXXX
result = {"shoppingProductKind": question1(), "backOrderInventory": question2(), "moreThanOneImage": question3(), "canonProducts": question4(), "eBayCanon": question5(), "allBrandPriceImages": question6()};

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});


