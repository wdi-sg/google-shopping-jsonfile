const jsonfile = require('jsonfile');

const file = 'products.json';

jsonfile.readFile(file, (err, obj) => {

  console.dir(obj);

  var resultFile = 'results.json';
  
  var items = obj.items;

  var count = 0;

 
 //Q1:
  for (let index in items) {
    if (items[index].kind === "shopping#product") {
      count += 1;
    }
  }

  //var result = {q1Result: count};

  //Q2:
  let title = [];
  for (let index in items) {
  	let item = items[index].product;
  	if (item.inventories[0].availability === "backorder") {
  		title.push(item.title);	
  	}
  }

  //Q3:
  let q3Title = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.images.length > 1) {
      q3Title.push(item.title);
    }
  }

  //Q4:
  let q4Title = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon") {
      q4Title.push(item.title);
    }
  }

  //Q5:
  let q5Title = [];
  for (let index in items) {
    let item = items[index].product;
    if (item.brand === "Canon" && item.author.name === "eBay") {
      q5Title.push(item.title);
    }
  }

  //Q6:
  let q6 = [];
  for (let index in items) {
    let item = items[index].product;
    let ans = "Brand: " + item.brand + "\n" + "Price: " + item.inventories[0].price + "\n" + "Link: " + item.images[0].link;
    q6.push(ans);
  }


  var result = { q1Result: count, q2Result: title, q3Result: q3Title, q4Result: q4Title, q5Result: q5Title, q6Result: q6 };


   jsonfile.writeFile(resultFile, result, {spaces: 2}, function (err) {
    console.error(err)
  });

});
