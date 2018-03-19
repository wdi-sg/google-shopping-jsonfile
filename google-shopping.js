"use strict";

// Write your solutions below
const args = process.argv;
const jsonfile = require('jsonfile');
const prevAns = require("./previous-answers.js");
const file = 'products.json';

jsonfile.readFile(file, function (err, obj) {
  question1(obj);
  // count also present in currentItemCount

  let resultFile = 'result.json';
  let result = {
    "titleBackorderInventories": question2(obj),
    "titleMoreThanOneImageLink": question3(obj),
    "canonProducts": question4(obj),
    "itemAuthorEbayBrandCanon": question5(obj),
    "productBrandPriceImage": question6(obj)
  };

  if (args[2] === "getkey" && result[args[3]]) {
    console.log(result[args[3]]);
  }

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});

let question1 = (products) => {
  let count = 0;
  let items = products.items;

  for (let index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  console.log(count);
}

let question2 = (products) => {
  let items = products.items;
  let stuff = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      stuff.push(item.title);
    }
  }
  return stuff;
}

let question3 = (products) => {
  let items = products.items;
  let stuff = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.images.length > 1) {
      stuff.push(item.title);
    }
  }
  return stuff;
}

let question4 = (products) => {
  let items = products.items;
  let stuff = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon") {
      stuff.push(item.title);
    }
  }
  return stuff;
}

let question5 = (products) => {
  let items = products.items;
  let stuff = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      stuff.push(item.title);
    }
  }
  return stuff;
}

let question6 = (products) => {
  let items = products.items;
  let stuff = [];
  for (let index in items) {
    let item = items[index].product;
    stuff[index] = {
      "Brand": item.brand,
      "Price": item.inventories[0].price,
      "Link": item.images[0].link
    }
  }
  return stuff;
}