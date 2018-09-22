// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)


//question One
function question1() {
  var count = 0;
  var items = products.items;

  for (var i=0; i<items.length; i++) {
    if (items[i].kind === "shopping#product") {
      count += 1;
    }
  }
  console.log(count);
}

//question Two
function question2() {
  console.log("Question #2");
  for (var i=0; i<items.length; i++) {
    var item = items[i].product;
    if (item.inventories[0].availability === "backorder") {
      console.log(item.title);
    }
  }
}
  
//question Three
function question3() {
  console.log("Question #3");
  for (var i=0; i<items.length; i++) {
    var item = items[i].product;
    if (item.images.length > 1) {
      console.log(item.title);
    }
  }
}


//question Four
function question4() {
  console.log("Question #4");
  for (var i=0; i<items.length; i++) {
    var item = items[i].product;
    if (item.brand === "Canon") {
      console.log(item.title);
    }
  }
}


//question Five
function question5() {
  console.log("Question #5");
  for (var i=0; i<items.length; i++) {
    var item = items[i].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      console.log(item.title);
    }
  }
}


//question Six
function question6() {
  console.log("Question #6");
  for (var i=0; i<items.length; i++) {
    var item = items[i].product;
    console.log("Brand: " + item.brand);
    console.log("Price: " + item.inventories[0].price);
    console.log("Link: " + item.images[0].link);
  }
}


//write results to results.json
    var resultFile = 'results.json'
    var result = {obj} 
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
