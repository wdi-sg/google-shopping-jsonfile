// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'
var count = 0;
jsonfile.readFile(file, function(err, obj) {
//  console.dir(obj)

//Q1//
//console.log(obj.items[0].kind)
// for(var i = 0; i < obj.items.length; i++) {
//   if(obj.items[i].kind === "shopping#product"){

//     count++;
//   }
// }
// console.log(count)



//Q2//
//console.log(obj.items[0].product.inventories[0].availability) //product availability
//console.log(obj.items[0].product.title)                       //product title
var backorderTitle = [];
for(var i = 0; i < obj.items.length; i++){
  if(obj.items[i].product.inventories[0].availability === "backorder"){
    backorderTitle.push(obj.items[i].product.title)
  }
}
//console.log(backorderTitle)   //titles with items that have backorder availability



//Q3//
var titlesOfMultiImgLink = [];
for(var i = 0; i < obj.items.length; i++){
  if(obj.items[i].product.images.length > 1){
    titlesOfMultiImgLink.push(obj.items[i].product.title)
  }
}

//obj.items[i].product.images                     //image links of items
//console.log(obj.items[0].product.images.length) //length of image link array, or number of links
//console.log(titlesOfMultiImgLink)               //result of titles with more than one image links



//Q4//
var canonProducts = [];
for(var i = 0; i < obj.items.length; i++){
  if(obj.items[i].product.brand.toLowerCase() === 'canon'){
    canonProducts.push(obj.items[i])
  }
}
//obj.items[0].product.brand                     //brand of the product



//Q5//
var ebayNcanonItems = [];
for(var i = 0; i < obj.items.length; i++){
  if((obj.items[i].product.author.name.toLowerCase() === 'ebay') && (obj.items[i].product.brand.toLowerCase() === 'canon')){
    ebayNcanonItems.push(obj.items[i]);
  }
}

 //console.log(ebayNcanonItems[0].product.author.name)       //shows the author



//Q6//
var productPriceBrandLinksArray = [
{
  productPriceBrandLinks[0] : {
    obj.items[i].product.brand :
    price :
    obj.items[i].product.images :
  }


}
];

    allProducts.brand
    allProducts.price
    allProducts.imgLinks

for(var i = 0; i < obj.items.length; i++){
  var brand     productPriceBrandLinks[i] = obj.items[i].product.brand+ ", "+price+ ", "+obj.items[i].product.images
      // price     productPriceBrandLinks[i] =
      // img links productPriceBrandLinks[i] = obj.items[i].product.images

}


  var resultFile = 'results.json'
  var result = {

    name: 'JP'

  }
  result.backorders = backorderTitle;
  result.titleswMultiImgLinks = titlesOfMultiImgLink;
  result.canonItems = canonProducts;
  result.eBayNcanon = ebayNcanonItems;

  console.log(result)


  jsonfile.writeFile(resultFile, result, function (err) {
    //console.error(err)
  });

});
