// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));

const animals = ["ant", "bison", "camel", "duck", "elephant"];

//console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"] - remove index 2

//console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"] -- remove until 1 let 2,3 and remove 4

//console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"] - remove 0 and the index of array is 4 also no 5

//console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]  - the last 2 entry remains

//console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"] - remove index of 0 and 1 and remove the last entry

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"] - remove nothing
