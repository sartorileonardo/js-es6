//default is apply when do you need excluse undefined parameters.

const div = (firstNumber, secondNumber) => firstNumber / secondNumber;

//console.log(div(10, 2));

//Error
console.log(div(10, undefined));

//Solution: add default param to function