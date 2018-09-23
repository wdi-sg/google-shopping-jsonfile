//Write your solutions below
//Qns 1

// const jsonfile = require('jsonfile');

// const file = 'products.json'

// jsonfile.readFile(file, function(err, obj) 
// {
//   var result = {};
//   //console.dir(obj)
//   function question1() 
//   {
//     //console.log("Question #1");
//     var count = 0;
//     var items = obj.items;

//     for (var index in items) 
//     {
//       if (items[index].kind === "shopping#product") 
//       {
//         count += 1;
//       }
//     }
//     console.log(count);
//     result['Q1- Count'] = count;
//   }

//   var resultFile = 'results.json';

//   question1();

//   jsonfile.writeFile(resultFile, result, function (err) 
//   {
//     console.error(err);
//   });
// });

//Qns 2

// const jsonfile = require('jsonfile');

// const file = 'products.json'

// jsonfile.readFile(file, function(err, obj) 
// {
//   var result = {};
//   //console.dir(obj)
//   function question2() 
//   {
//   var items = obj.items;
//   //console.log("Question #2");
//   for (var index in items) 
//     {
//       var item = items[index].product;
//       if (item.inventories[0].availability === "backorder") 
//         {
//           console.log(item.title);
//           result['Q2- Title (inventories: backorder)'] = item.title;
//         }
//     }
//   }

//   var resultFile = 'results.json';

//   question2();

//   jsonfile.writeFile(resultFile, result, function (err) {
//     console.error(err)
//   });
// });


//Qns 3

// const jsonfile = require('jsonfile');

// const file = 'products.json'

// jsonfile.readFile(file, function(err, obj) 
// {
//   var result = {};
//   //console.dir(obj)
//   function question3() 
//   {
//     var items = obj.items;
//     //console.log("Question #3");
//     for (var index in items) 
//     {
//       var item = items[index].product;
//       if (item.images.length > 1) 
//       {
//         console.log(item.title);
//         result['Q3- Title (more than 1 image)'] = item.title;
//       }
//     }
//   }

//   var resultFile = 'results.json';

//   question3();

//   jsonfile.writeFile(resultFile, result, function (err) 
//   {
//     console.error(err)
//   });
// });

// //Qns 4

// const jsonfile = require('jsonfile');

// const file = 'products.json'

// jsonfile.readFile(file, function(err, obj) 
// {
//   var result = {};
//   //console.dir(obj)
//   function question4() 
//   {
//     var items = obj.items;
//     //console.log("Question #4");
//     for (var index in items) 
//     {
//       var item = items[index].product;
//       if (item.brand === "Canon") 
//       {
//         console.log(item.title);
//         result['Q4- All Canons product'] = item.title;
//       }
//     }
//   }

//   var resultFile = 'results.json';

//   question4();

//   jsonfile.writeFile(resultFile, result, function (err) 
//   {
//     console.error(err)
//   });
// });

// //Qns 5

// const jsonfile = require('jsonfile');

// const file = 'products.json'

// jsonfile.readFile(file, function(err, obj) 
// {
//   var result = {};
//   //console.dir(obj)
//   function question5() 
//   {
//     var items = obj.items;
//     //console.log("Question #5");
//     for (var index in items) 
//     {
//       var item = items[index].product;
//       if (item.brand === "Canon" && item.author.name === "eBay") 
//       {
//         console.log(item.title);
//         result['Q5- All Canons product and author, eBay'] = item.title;
//       }
//     }
//   }

//   var resultFile = 'results.json';

//   question5();

//   jsonfile.writeFile(resultFile, result, function (err) 
//   {
//     console.error(err)
//   });
// });

//Qns 6

const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) 
{
  var result = {};
  //console.dir(obj)

  function question6() 
  {
    var allProductsArray = [];
    var items = obj.items;
    //console.log("Question #6");
    for (var index in items) 
    {
      var item = items[index].product;
      var allProducts = 
      {
        "brand" : item.brand,
        "price" : item.inventories[0].price,
        "link" : item.images[0].link
      }
      //console.log("Brand: " + item.brand);
      //console.log("Price: " + item.inventories[0].price);
      //console.log("Link: " + item.images[0].link);
      allProductsArray.push(allProducts);
      console.log(allProductsArray);
      result['Q6- All products'] = allProductsArray;
    }
  }

  var resultFile = 'results.json';

  question6();

  jsonfile.writeFile(resultFile, result, function (err) 
  {
    console.error(err)
  });
});