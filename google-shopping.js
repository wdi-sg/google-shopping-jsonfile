// Write your solutions below
const jsonfile = require("jsonfile");

const file = "products.json";
<<<<<<< HEAD
//Extra 1
// jsonfile.readFile(file, function(err, obj) {
//   console.log(obj[process.argv[2]])
// });
var resultFile = "result.json";
var result = { name: "CM" };
// Part 1
// var count = 0;
// if(process.argv[2]="shopping#product"){
// 	result['shopping#product']= shoppingProducts();
// }
// 	function shoppingProducts(){
// 	for(var i=0;i<obj.items.length;i++){
// 		if(obj.items[i].kind === "shopping#product"){
// 			count +=1 ;
// 		}
// 	}
// 	return count;
// }

//   // Part 2
//   var available=[]
// 	if(process.argv[2]="findAvailability"){
// 		result["Available Stock"]= availableStock();
// 	}
// 	function availableStock(){
// 	for(var i in obj.items){
// 		var item=obj.items[i].product
// 		if(item.inventories[0].availability=='backorder'){
// 			available.push(item.title)
// 		}
// 	}
// 	return available;
// }
//
// var moreThanOneImageArray = []
//
// if(process.argv[2] = "findImage"){
//   result["More than one image link"]=moreThanOneImageLink();
// }
//
// function moreThanOneImageLink() {
//   for (var i in obj.items) {
//     var item = obj.items[i].product;
//     if (item.images.length > 1) {
//       moreThanOneImageArray.push(item.title)
//     }
//   }
//   return moreThanOneImageArray;
// }
// Part 4
// var canonProductArray = [];
// if (process.argv[2] = "findCanonProducts") {
//   result["Canon Products"] = canonProducts();
// }
// function canonProducts() {
//   for (var index in obj.items) {
//     var item = obj.items[index].product;
//     if (item.brand === "Canon") {
//       canonProductArray.push(item.title);
//     }
//   }
//   return canonProductArray;
// }
// Part 5
// var canonEbayArray = [];
// if ((process.argv[2] = "canonEbayProducts")) {
//   result["Canon Brand, eBay Products"] = canonEbayProducts();
// }
// function canonEbayProducts() {
//   for (var index in obj.items) {
//     var item = obj.items[index].product;
//     if (item.brand === "Canon" && item.author.name === "eBay") {
//       canonEbayArray.push(item.title);
//     }
//   }
//   return canonEbayArray;
// }
// Part 6
// var partSixArray = [];
// if ((process.argv[2] = "partSixArray")) {
//   result["all info"]=question6();
// }
// function question6() {
//   for (var index in obj.items) {
//     var item = obj.items[index].product;
//     var all = {
//       Brand: item.brand,
//       Price: item.inventories[0].price,
//       Link: item.images[0].link
//     };
//     partSixArray.push(all);
//   }
//   return partSixArray;
// }
// Extra 2


jsonfile.writeFile(resultFile, result, function(err) {
  console.error(err);
=======

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)

  var resultFile = "result.json";
  var result = { name: "JP" };
  // Part 1
  // var count = 0;
  // if(process.argv[2]="shopping#product"){
  // 	result['shopping#product']= shoppingProducts();
  // }
  // 	function shoppingProducts(){
  // 	for(var i=0;i<obj.items.length;i++){
  // 		if(obj.items[i].kind === "shopping#product"){
  // 			count +=1 ;
  // 		}
  // 	}
  // 	return count;
  // }

  //   // Part 2
  //   var available=[]
  // 	if(process.argv[2]="findAvailability"){
  // 		result["Available Stock"]= availableStock();
  // 	}
  // 	function availableStock(){
  // 	for(var i in obj.items){
  // 		var item=obj.items[i].product
  // 		if(item.inventories[0].availability=='backorder'){
  // 			available.push(item.title)
  // 		}
  // 	}
  // 	return available;
  // }
  //
  // var moreThanOneImageArray = []
  //
  // if(process.argv[2] = "findImage"){
  //   result["More than one image link"]=moreThanOneImageLink();
  // }
  //
  // function moreThanOneImageLink() {
  //   for (var i in obj.items) {
  //     var item = obj.items[i].product;
  //     if (item.images.length > 1) {
  //       moreThanOneImageArray.push(item.title)
  //     }
  //   }
  //   return moreThanOneImageArray;
  // }
  // Part 4
  // var canonProductArray = [];
  // if (process.argv[2] = "findCanonProducts") {
  //   result["Canon Products"] = canonProducts();
  // }
  // function canonProducts() {
  //   for (var index in obj.items) {
  //     var item = obj.items[index].product;
  //     if (item.brand === "Canon") {
  //       canonProductArray.push(item.title);
  //     }
  //   }
  //   return canonProductArray;
  // }
  // Part 5
  // var canonEbayArray = [];
  // if ((process.argv[2] = "canonEbayProducts")) {
  //   result["Canon Brand, eBay Products"] = canonEbayProducts();
  // }
  // function canonEbayProducts() {
  //   for (var index in obj.items) {
  //     var item = obj.items[index].product;
  //     if (item.brand === "Canon" && item.author.name === "eBay") {
  //       canonEbayArray.push(item.title);
  //     }
  //   }
  //   return canonEbayArray;
  // }
  // Part 6
  // var partSixArray = [];
  // if ((process.argv[2] = "partSixArray")) {
  //   result["all info"]=question6();
  // }
  // function question6() {
  //   for (var index in obj.items) {
  //     var item = obj.items[index].product;
  //     var all = {
  //       Brand: item.brand,
  //       Price: item.inventories[0].price,
  //       Link: item.images[0].link
  //     };
  //     partSixArray.push(all);
  //   }
  //   return partSixArray;
  // }

  jsonfile.writeFile(resultFile, result, function(err) {
    console.error(err);
  });
>>>>>>> 5f20f46e04c28f083ca5db7de9628bb1ee48d0e8
});
