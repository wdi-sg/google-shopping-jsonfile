// Use the product search result in your file to find the following results.

module.exports = function() {

// 1.) Go through the items and find all results that have kind of shopping#product.
//     Print the count of these results.
this.question1 = function(products) {
                        var itemList = products.items;
                        var counter = 0;
                        for (var i = 0; i < itemList.length; i++) {
                            var item = itemList[i];
                            if (item.kind === "shopping#product") {
                                counter++;
                            }
                        }
                        return counter;
                    };

// 2.) Print the title of all items with a backorder availability in inventories.
// booger's code
this.question2 = function(products) {
                        var itemList = products.items;
                        var results = [];
                        for (var i = 0; i < itemList.length; i++) {
                            var item = itemList[i];
                            var itemProduct = item.product;
                            var productInventories = itemProduct.inventories;
                            var availability = productInventories[0].availability;
                            if (availability === "backorder") {
                                results.push(itemProduct.title);
                            }
                        }
                        return results;
                    };

// 3.) Print the title of all items with more than one image link.
this.question3 = function(products) {
                          var itemList = products.items;
                          var results = [];
                          for (var i = 0; i < itemList.length; i++) {
                              var item = itemList[i];
                              var itemProduct = item.product;
                              var imagesList = itemProduct.images;
                              if (imagesList.length > 1) {
                                  results.push(itemProduct.title);
                              }
                          }
                          return results;
                      };

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
this.question4 = function(products) {
                        var itemList = products.items;
                        var results = [];
                        for (var i = 0; i < itemList.length; i++) {
                            var item = itemList[i];
                            var itemProduct = item.product;
                            var brand = itemProduct.brand;
                            if (brand === "Canon") {
                                results.push(itemProduct.title);
                            }
                        }
                        return results;
                    };

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".
this.question5 = function(products) {
                      var itemList = products.items;
                      var results = [];
                      for (var i = 0; i < itemList.length; i++) {
                          var item = itemList[i];
                          var itemProduct = item.product;
                          var brand = itemProduct.brand;
                          var author = itemProduct.author.name;
                          if (brand === "Canon" && author.indexOf("eBay") !== - 1) {
                              results.push(itemProduct.title);
                          }
                      }
                      return results;
                  };

// 6.) Print all the products with their brand, price, and an image link
this.question6 = function(products) {
                      var itemList = products.items;
                      var results = [];
                      for (let i = 0; i < itemList.length; i++) {
                          let item = itemList[i];
                          let itemProduct = item.product;
                          let brandVal = itemProduct.brand;
                          let price = itemProduct.inventories[0].price;
                          let image = itemProduct.images[0].link;
                          let titleValue = itemProduct.title;
                          let currencyVar = itemProduct.inventories[0].currency;
                          let resultElement = {title: titleValue, brand: brandVal, currency: currencyVar, price: price, image: image};
                          // let resultElement = {};
                          // resultElement["price"] = price;  resultElement["title"] = titleValue;
                          // resultElement.brand = brandVal;  resultElement.currency = currencyVar;
                          // resultElement.image = image;
                          results.push(resultElement);
                      }
                      return results;
                  };
};
