// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {

    var resultFile = 'results.json'
    var resultObj = {};

    var items = obj.items;

    function deliver1(){
        var itemsCount = 0;
        for (var i = 0; i < obj.items.length; i++){
            if(obj.items[i].kind === "shopping#product"){
        //console.log(obj.items[i].kind)
        itemsCount++
            }
        }
    //console.log(itemsCount)
        resultObj["items"] = itemsCount;
    }
    deliver1();

    function deliver2(){
        var titlebackorder = [];

        for (var i = 0; i < obj.items.length; i++){
            if (obj.items[i].product.inventories[0].availability === "backorder"){
                //console.log(obj.items[i].product.title);
                titlebackorder.push(obj.items[i].product.title);
            }
        }
    resultObj["itemsBackorder"] = titlebackorder;
    //console.log(titlebackorder);
    }
    deliver2();

    function deliver3(){
        var titleimage = [];

        for (var i=0; i < obj.items.length; i++){
            if (obj.items[i].product.images.length > 1){
                //console.log(obj.items[i].product.title);
                titleimage.push(obj.items[i].product.title)
            }
        }
        resultObj["titleImage"] = titleimage;
        //console.log(titleimage)
    }
    deliver3();

    function deliver4(){
        var canon = [];

        for (var i=0; i < obj.items.length; i++){
            if (obj.items[i].product.brand === "Canon"){
                //console.log(obj.items[i].product.title);
                canon.push(obj.items[i].product.title);
            }
        }
        resultObj["canon"] = canon;
    }
    deliver4();

    function deliver5(){
        var ebay = [];

        for (var i=0; i < obj.items.length; i++){
            if (obj.items[i].product.author.name ==="eBay" && obj.items[i].product.brand === "Canon"){
                //console.log(obj.items[i]);
                ebay.push(obj.items[i]);

            }
        }
        resultObj["ebayCanon"] = ebay;
    }
    deliver5();

    function deliver6(){
        var products = [];
        for (var index in items) {
            var item = items[index].product;
            var temp = [];
            temp.push("Brand: " + item.brand, "Price: " + item.inventories[0].price, "Link: " + item.images[0].link);
                //console.log("Brand: " + item.brand);
                //console.log("Price: " + item.inventories[0].price);
                //console.log("Link: " + item.images[0].link);
            products.push(temp);
        }
        resultObj["products"] = products;
    }
    deliver6();
  //var result = {name: 'JP'}

    jsonfile.writeFile(resultFile, resultObj, function (err) {
    console.error(err)
  });

});

const resultFile = "results.json"

