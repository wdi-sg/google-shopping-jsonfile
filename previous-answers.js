// var products = require('products.json');

module.exports = {
    question1: function question1(products) {
      let counter = 0;
      let items = products.items;

      for (let i in items) {
        if (items[i].kind === "shopping#product") {
          counter += 1;
        }
      }
      // console.log(counter);
      return counter;
    },

    question2: function question2(products) {
      let items = products.items;
      let backorderItems = [];
      for (let index in items) {
        let item = items[index].product;
        if (item.inventories[0].availability === "backorder") {
          backorderItems.push(item.title);
        }
      }
      // console.log(backorderItems);
      return backorderItems;
    },

    question3: function question3(products) {
      let items = products.items;
      let moreThanOneLink = [];
      for (let index in items) {
        let item = items[index].product;
        if (item.images.length > 1) {
          moreThanOneLink.push(item.title);
        }
      }
      // console.log(moreThanOneLink);
      return moreThanOneLink;
    },

    question4: function question4(products) {
      let items = products.items;
      let canonItems = [];
      for (let index in items) {
        let item = items[index].product;
        if (item.brand === "Canon") {
          canonItems.push(item.title);
        }
      }
      // console.log(canonItems);
      return canonItems;
    },

    question5: function question5(products) {
      let items = products.items;
      let ebayCanon = [];
      for (let index in items) {
        let item = items[index].product;
        if (item.brand === "Canon" && item.author.name === "eBay") {
          ebayCanon.push(item.title);
        }
      }
      // console.log(ebayCanon);
      return ebayCanon;
    },

    question6: function question6(products) {
      let items = products.items;
      let allProducts = [];
      for (let index in items) {
        let item = items[index].product;
        allProducts[index] = {
          "Brand": item.brand,
          "Price": item.inventories[0].price,
          "Link": item.images[0].link
        }

      }
      // console.log(allProducts);
      return allProducts;

    }
}
