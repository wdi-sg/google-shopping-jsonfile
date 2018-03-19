// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

const resultFile = 'results.json'

jsonfile.readFile(file, function (err, obj) {
  let result = {};

  //Qn 1
  let count = 0;
  for (let i = 0; i < obj["items"].length; i++) {
    if (obj["items"][i]["kind"] == "shopping#product") {
      count = count + 1;

    };
  };
  result["kindShoppingProduct"] = count;

  //Qn 2
  for (let i = 0; i < obj["items"].length; i++) {
    if (obj["items"][i]["product"]["inventories"][0]["availability"] == "backorder") {
      titleBackOrderInventories.push(obj["items"][i]["product"]["title"])
      result["titleBackOrderInventories"] = titleBackOrderInventories
    };
  };

  //Qn 3
  for (let i = 0; i < obj["items"].length; i++) {
    if (obj["items"][i]["product"]["images"].length > 1) {
      result["titleMoreThanOneImage" + i] = obj["items"][i]["product"]["title"];
    };
  };

  //Qn 4
  for (let i = 0; i < obj["items"].length; i++) {
    if (obj["items"][i]["product"]["brand"] == "Canon") {
      result["titleOfCanonProducts" + i] = obj["items"][i]["product"]["title"];
    };
  };

  //Qn 5
  for (let i = 0; i < obj["items"].length; i++) {
    if (obj["items"][i]["product"]["brand"] == "Canon" && obj["items"][i]["product"]["author"]["name"].includes("eBay")) {
      result["titleAuthoreBayBrandCanon" + i] = obj["items"][i]["product"]["title"];
    };
  };

  //Qn 6
  for (let i = 0; i < obj["items"].length; i++) {
    result["title" + i] = obj["items"][i]["product"]["title"];
    result["brand" + i] = obj["items"][i]["product"]["brand"];
    result["price" + i] = obj["items"][i]["product"]["inventories"][0]["price"];
    result["imageLink" + i] = obj["items"][i]["product"]["images"][0]["link"];
  };

  //Bonus
  if (process.argv[2] == "getKey") {
    let argKey = process.argv[3]
    console.log(result[argKey]);
  };

//check on scoping issues with putting the results in an array. let is supposed to fix this.
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });
});
