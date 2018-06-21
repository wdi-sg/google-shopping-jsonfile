// Write your solutions below
const jsonfileModule = require('jsonfile'); // jsonfile is node module

const fileName = 'products.json'; // a string that holds the file name, not the actual file

require('./previous-homework.js')();  // import the functions from previous-honework.js so we don't need to use a prefix to call the functions

jsonfileModule.readFile(fileName, function(err, obj) {  // call the readFile function from jsonfileModule,
                                                        // which takes 2 arguments, a file name, and a callback once the file is read
    if (err == undefined) { // no error, everything is fine, and the json file is read into the JS object called obj
        // console.dir(obj);

        var resultFileName = 'results.json';
        var result = {}; // object that I want to write INTO results.json
        result.answer1 = question1(obj); // put the function results into result object
        result.answer2 = question2(obj); // answer2 is the key, question2(obj) (function result) is the value
        result.answer3 = question3(obj);
        result.answer4 = question4(obj);
        result.answer5 = question5(obj);
        result.answer6 = question6(obj);
        jsonfileModule.writeFile(resultFileName, result, {spaces: 2}, function (err) {
            // call the writeFile function from jsonfileModule
            // which takes 3 parameters, the first one is the file name of the file to write,
            // the 2nd one is the JS object to write,
            // the 3rd one is an option for nicely formatting the output
            // the 4th one is the callback after the writing is finished
            if (err == undefined) {
              console.log('success');
            } else {
              console.error(err);
            }
        });
    } else {
        console.error(err);
    }

});
