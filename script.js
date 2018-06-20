const jsonfile = require('jsonfile')
const myFunctions = require('./my-module')
const productsFile = 'products.json'
const resultsFile = 'results.json'

jsonfile.readFile(productsFile, (err, obj) => {
  const itemsArray = obj.items;

  let deliverablesOneAnswer = myFunctions.deliverablesOne(itemsArray);
  let deliverablesTwoAnswer = myFunctions.deliverablesTwo(itemsArray);
  let deliverablesThreeAnswer = myFunctions.deliverablesThree(itemsArray);
  let deliverablesFourAnswer = myFunctions.deliverablesFour(itemsArray);
  let deliverablesFiveAnswer = myFunctions.deliverablesFive(itemsArray);
  let deliverablesSixAnswer = myFunctions.deliverablesSix(itemsArray);

  const result = {
    deliverablesOne : deliverablesOneAnswer,
    deliverablesTwo : deliverablesTwoAnswer,
    deliverablesThree : deliverablesThreeAnswer,
    deliverablesFour : deliverablesFourAnswer,
    deliverablesFive : deliverablesFiveAnswer,
    deliverablesSix : deliverablesSixAnswer
  }

  jsonfile.writeFile(resultsFile, result, (err) => { myFunctions.bonusFunction() })
});
