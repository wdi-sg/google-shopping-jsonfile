"use strict";

// Write your solutions below
const jsonfile = require('jsonfile');
const prevAns = require("./previous-answers.js");

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  question1(obj);
  // count also present in currentItemCount

  let resultFile = 'result.json';
  let result = {"titleBackorderInventories": question2(obj),
                "titleMoreThanOneImageLink": question3(obj),
                "canonProducts": question4(obj),
                "itemAuthorEbayBrandCanon": question5(obj),
                "productBrandPriceImage": question6(obj)
  };

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
  let backorderTitles = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.inventories[0].availability === "backorder") {
      backorderTitles.push(item.title);
    }
  }
  return backorderTitles;
}

let question3 = (products) => {
  let items = products.items;
  let moreThanOneLink = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.images.length > 1) {
      moreThanOneLink.push(item.title);
    }
  }
  return moreThanOneLink;
}

let question4 = (products) => {
  
}

let question5 = (products) => {
  
}

let question6 = (products) => {
  
}