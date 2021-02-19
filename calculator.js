
const Calculator = {
    sum: (firstNumber, secondNumber) => firstNumber + secondNumber,
    sub: (firstNumber, secondNumber) => firstNumber - secondNumber,
    mult: (firstNumber, secondNumber) => firstNumber * secondNumber,
    div: (firstNumber, secondNumber) => secondNumber !== 0 ? (firstNumber / secondNumber) : undefined
}

module.exports = Calculator;
