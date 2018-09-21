// Write your solutions below
const jsonfile = require('jsonfile');  //Packages invovled
const funct = require('./my_module')   //creation of modules
const productFile = 'products.json'		//files that contain the information
const resultFile = 'result.json'		//empty file to print on

jsonfile.readFile(productFile, function(err, obj) { //READ FILE
itemsArr=obj.items;

var result = {
  			"deliverablesOne" : funct.deliverablesOne(itemsArr),
  			"deliverablesTwo" : funct.deliverablesTwo(itemsArr),
  			"deliverablesThree" : funct.deliverablesThree(itemsArr),
  			"deliverablesFour" : funct.deliverablesFour(itemsArr),
  			"deliverablesFive" : funct.deliverablesFive(itemsArr),
  			"deliverablesSix" : funct.deliverablesSix(itemsArr)
  			}

  jsonfile.writeFile(resultFile, result, function (err) { //WRITE FILE
    console.error(err) 
  });

});
