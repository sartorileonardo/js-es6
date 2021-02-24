let myFruitsOne = ["banana", "orange"];
let myFruitsTwo = ["apple"];

//Merge two arrays with concat
console.log(myFruitsOne.concat(myFruitsTwo));

const ingredientOne= { hamburguer: "steak hamburguer" };
const ingradientTwo = { salad: "lettuce with tomatos" };

//To merge too objects, use Object.assign(objOne, objTwo, ...)
const mySandwitch = Object.assign(ingredientOne, ingradientTwo);

console.log(mySandwitch);