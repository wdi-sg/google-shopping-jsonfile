// Write your solutions below
var jsonfile = require('jsonfile');

var file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'results.json';
  var result = {};
  var item = obj.items;

  // function question1() {
  //   var count = 0;
  //   for(var i = 0; i < item.length; i++) {
  //     if(item[i]['kind'] == 'shopping#product') {
  //       count += 1;
  //     };
  //   };
  //   result['shoppingProductCount'] = count.toString();   // convert answer to string and add to resultsObject
  // };
  // question1();

  //Qn2
  // var titles = [];
  // function question2(){
  //   for(var i = 0; i < item.length; i++) {
  //     if (item[i]['product']['inventories'][0]['availability'] === "backorder"){
  //       titles.push(item[i]['product']['title']);
  //     }
  //   };
  //   result['titleBackorderInventories'] = titles;   // convert answer to string and add to resultsObject
  // };
  // question2();

  //Qn3
  // var titles = [];
  // function question3(){
  //   for (var i = 0 ; i < item.length; i++){
  //     if (item[i]['product']['images'].length > 1){
  //       titles.push(item[i]['product']['title']);
  //     }
  //   }
  //   result['titleImages'] = titles;
  // };
  // question3();





  jsonfile.writeFile(resultFile, result, function (err) {

    console.error(err)
  });

});
