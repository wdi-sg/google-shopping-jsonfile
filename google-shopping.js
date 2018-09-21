// Write your solutions below
// var count = 0;

var jsonfile = require('jsonfile');

var file = 'products.json'

jsonfile.readFile(file, function(err, obj) {


    var count = 0;
    var items = obj.items;

    for (var index in items) {
      if (items[index].kind === "shopping#product") {
        count += 1;
      }
    }

  //console.dir(obj)

  var resultFile = 'results.json'
  var result = {}
  result["count"] = count

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});






