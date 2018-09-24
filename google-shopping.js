// Write your solutions below
// var count = 0;

var jsonfile = require('jsonfile');

var file = 'products.json'

jsonfile.readFile(file, function(err, obj) {

  var result = {}
  var resultFile = 'results.json'
  var items = obj.items;

  function question1() {
  console.log("Question #1");
  var count = 0;


  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  //console.log(count);
  result["count"] = count

}
  question1();
//====

  function question2() {
    var myArray = [];
    console.log("Question #2");
    for (var index in items) {
    var item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      myArray.push(item.title);
      //console.log(item.title);
    }
  }

  result["backorderTitle"] = myArray;
}
  question2();

//===
  function question3() {
    var myImageLink = [];
    console.log("Question #3");
    for (var index in items) {
      var item = items[index].product;
      if (item.images.length > 1) {
        myImageLink.push(item.title);
      }
    }
    result["MoreLinks"] = myImageLink;
  }

  question3();
//====

function question4() {
  var myCanon = [];
  console.log("Question #4");
  for (var index in items) {
    var item = items[index].product; /*var items = obj.items;*/
    if (item.brand === "Canon") {
      myCanon.push(item.title);
      //console.log(item.title);
    }
  }
  result["Canon"] = myCanon;
}

  question4()
//====

function question5() {
  var myCanonEbay = [];
  console.log("Question #5");
  for (var index in items) {
    var item = items[index].product; /*var items = obj.items;*/
    if (item.brand === "Canon" && item.author.name === "eBay") {
      myCanonEbay.push(item);
      //console.log(item.title);
    }
  }
  result["AuthorNameUseCanon"] = myCanonEbay;
}

  question5()
//=======

  function question6() {
    var myArray = [];
  console.log("Question #6");
  for (var index in items) {
    var item = items[index].product;
    var allproducts = [];
   allproducts.push("Brand: " + item.brand, "Price: " + item.inventories[0].price,"Link: " + item.images[0].link);
    myArray.push(allproducts);
    // console.log("Brand: " + item.brand);
    // console.log("Price: " + item.inventories[0].price);
    // console.log("Link: " + item.images[0].link);
  }
  result["products"] = myArray;
}

  question6();


  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});







