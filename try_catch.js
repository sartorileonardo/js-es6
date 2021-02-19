const Calculator = require("./calculator");

const div = (firstNumber, secondNumber) => firstNumber / secondNumber;

try {
    console.log("10 / 5 = " + Calculator.div(0, 0));
    //Show error
    //Calculator.sqrt(25);
} catch (error) {
    throw new Error("Sorry, the app finded a problem: " + error);
} finally {
    console.log("Function is called.");
}