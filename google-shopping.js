// Write your solutions below
var jsonfile = require('jsonfile');

//var file = 'products.json'

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

  //Qn4
  // var titles = [];
  // function question4(){
  //   for (var i = 0 ; i < item.length; i++){
  //     if (item[i]['product']['brand'] === 'Canon'){
  //       titles.push(item[i]['product']['title']);
  //     }
  //   }
  //   result['titleImagesBrand'] = titles;
  // };
  // question4();

  //Qn5
  // var titles = [];
  // function question5(){
  //   for (var i = 0 ; i < item.length; i++){
  //     if (item[i]['product']['brand'] === 'Canon' && item[i]['product']['author']['name'].includes('eBay')){
  //       result['itemList'] = item[i];
  //     }
  //   }
  // };
  // question5();

  //Qn6
  // var array = [];
  // function question6(){
  //   for (var i = 0; i < item.length; i++){
  //     var currentObject = {
  //       "productBrand": item[i]['product']['brand'],
  //       "productPrice": item[i]['product']['inventories'][0]['price'],
  //       "productImageLink": item[i]['product']['images'][0]['link']
  //     }


  //     array.push(currentObject);
  //   }
  //   result['allProductsBrandPriceLink'] = array;
  // };
  // question6();

  //Extra1: Qn2 for example
  // var titles = [];
  // function question2(){
  //   for(var i = 0; i < item.length; i++) {
  //     if (item[i]['product']['inventories'][0]['availability'] === "backorder"){
  //       titles.push(item[i]['product']['title']);
  //     }
  //   };
  //   result['titleBackorderInventories'] = titles;   // convert answer to string and add to resultsObject
  //   console.log(result[process.argv[3]]);
  //  };
  // question2();

  //Extra3: Use different set of JSON data
  //The logic is that since the file name would be save in process.argv, we shall use process.argv[2] to access the file
  // var file = process.argv[2]; Move this line to above, after the function declaration




  jsonfile.writeFile(resultFile, result, function (err) {

    console.error(err)
  })

});

