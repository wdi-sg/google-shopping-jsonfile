// Write your solutions below
var jsonfile = require('jsonfile');

var file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'results.json';
  var result = {};
  var item = obj.items;

  function question1() {
    var count = 0;
    for(var i = 0; i < item.length; i++) {
      if(item[i]['kind'] == 'shopping#product') {
        count += 1;
      };
    };
    result['shoppingProductCount'] = count.toString();   // convert answer to string and add to resultsObject
  };
  question1();


  jsonfile.writeFile(resultFile, result, function (err) {

    console.error(err)
  });

});
