// var products = require('products.json');

module.exports = {
  question1: function question1() {
    console.log("Question #1");
    var count = 0;
    var items = products.items;

    for (var index in items) {
      if (items[index].kind === "shopping#product") {
        count += 1;
      }
    }
    console.log(count);
  },

  question2: function question2() {
    console.log("Question #2");
    for (var index in items) {
      var item = items[index].product;
      if (item.inventories[0].availability === "backorder") {
        console.log(item.title);
      }
    }
  },

  question3: function question3() {
    console.log("Question #3");
    for (var index in items) {
      var item = items[index].product;
      if (item.images.length > 1) {
        console.log(item.title);
      }
    }
  },

  question4: function question4() {
    console.log("Question #4");
    for (var index in items) {
      var item = items[index].product;
      if (item.brand === "Canon") {
        console.log(item.title);
      }
    }
  },

  question5: function question5() {
    console.log("Question #5");
    for (var index in items) {
      var item = items[index].product;
      if (item.brand === "Canon" && item.author.name === "eBay") {
        console.log(item.title);
      }
    }
  },

  question6: function question6() {
    console.log("Question #6");
    for (var index in items) {
      var item = items[index].product;
      console.log("Brand: " + item.brand);
      console.log("Price: " + item.inventories[0].price);
      console.log("Link: " + item.images[0].link);
    }
  }

}
