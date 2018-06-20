// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json';

jsonfile.readFile(file, function(err, obj) {
  // console.log(obj);
  let items = obj['items'];
  var resultFile = 'results.json';
  var result = {};




  function  ques1 () {
    let count = 0;
    console.log(items);
    for(var i=0; i<items.length; i++) {
      if (items[i]['kind'] == 'shopping#product') {
        count++;
      }
    }
    result.qOne = count.toString();
    // console.log(count);
  }




  function ques2 () {
    let titles = [];
    for(var i=0; i<items.length; i++) {
      if (items[i]['product']['inventories'][0]['availability'] == 'backorder') {
        titles.push(items[i]['product']['title']);
      }
    }
    result.qTwo = titles;
    // console.log(titles);
  }

  

  function ques3 () {
    let titles = [];
    for(var i=0; i<items.length; i++) {
      if (items[i]['product']['images'].length>1) {
        titles.push(items[i]['product']['title']);
      }
    }
    result.qThree = titles;
    // console.log(titles);
  }
  



  function  ques4  () {
    let ite = [];
    for(var i=0; i<items.length; i++) {
      if (items[i]['product']['brand'] == 'Canon') {
        ite.push(items[i]);
      }
    }
    result.qFour = ite;
    // console.log(result.qFour);
  }

  function ques5 () {
    let ite = [];
    for(var i=0; i<items.length; i++) {
      if (items[i]['product']['brand'] == 'Canon' && items[i]['product']['author']['name'] == 'eBay') {
        ite.push(items[i]);
      }
    }
    result.qFive = ite;
    // console.log(result.qFive);
  }
  
  function ques6 () {
    let ite = {};
    for(var i=0; i<items.length; i++) {
      ite[i+1] = {};
      ite[i+1].brand = items[i]['product']['brand'];
      ite[i+1].price = items[i]['product']['inventories'][0]['price'];
      ite[i+1].image = items[i]['product']['images'][0]['link'];
    }
    result.qSix = ite;
    console.log(result.qFive);
  }

  ques1();
  ques2();
  ques3();
  ques4();
  ques5();
  ques6();
  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});

