// Write your solutions below
const jsonfile = require('jsonfile');
const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  //Getting all relevant data
  var items = obj.items;
  //making it shorter
  var questionOne = items.filter(x => {
    return x.kind === "shopping#product";
  })

  function questionTwo() {
    var results = items.filter(x => {
      return x.product.inventories[0].availability == "backorder"
    });
    // console.log(results[0].kind);

    var iterated = results.forEach(function(log){
      console.log(typeof log['product'].title);
      return log['product'];
      })
  }

  function questionThree() {
    for (i = 0; i < items.length; i++) {
      if (items[i].product.images.length >= 2)
        return {
          title: items[i].product.title,
          brand: items[i].product.brand,
          price: items[i].product.inventories[0].price,
          images: items[i].product.images
        }
    }
  }

  function questionFour() {
    for (i = 0; i < items.length; i++) {
      if (items[i].product.brand === "Canon")
        return {
          title: items[i].product.title,
          brand: items[i].product.brand,
          price: items[i].product.inventories[0].price,
          images: items[i].product.images
        }
    }
  }

  function questionFive() {
    for (i = 0; i < items.length; i++) {
      if (items[i].product.brand === "Canon" && items[i].product.author.name === "eBay")
        return {
          title: items[i].product.title,
          brand: items[i].product.brand,
          price: items[i].product.inventories[0].price,
          images: items[i].product.images
        }
    }
  }

  //Writing to JSON
  var resultFile = 'results.json'
  var result = [{
      questionOne: questionOne.length
    },
    {
      questionTwo: questionTwo()
    },
    {
      questionThree: questionThree()
    },
    {
      questionFour: questionFour()
    },
    {
      questionFive: questionFive()
    }
  ]
  jsonfile.writeFile(resultFile, result, function(err) {
    console.error(err)
  });
});
