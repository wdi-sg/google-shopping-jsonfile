"use strict";

// Write your solutions below
const jsonfile = require('jsonfile');
const prevAns = require("./previous-answers.js");

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  question1(obj);
  // count also present in currentItemCount

  var resultFile = 'result.json';
  var result = {name: 'JP'};

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err);
  });

});

let question1 = (products) => {
  var count = 0;
  var items = products.items;

  for (var index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }
  console.log(count);
}