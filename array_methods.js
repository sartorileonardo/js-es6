const languages = ["Java", "Python", "JavaScript", "C", "C#", "C++", "Go"];
const otherLanguages = new Array("Lua", "Haskel", "Assembly");

//Exist Java in list ?
console.log(languages.includes("Java"));

//How to add new element ?
console.log(languages.push("Ruby"));

//How to remove the last element ?
console.log(languages.pop());

//How to remove the first element ?
console.log(languages.shift());

//How to add or remove to specific position (copy to array)
console.log(languages.splice(0, 2));

//How to find one item to list ?
const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 9, 10];
console.log(numbers.find(number => number > 3));

//How to find too items to list ?
console.log(numbers.filter(number => number > 3)); 

//How to create a custom function to sum total items array
const initialValue = 0;
const totalNumbers = numbers.reduce((number, total) => {
    return total + number;
}, initialValue);
console.log(totalNumbers);

