const Calculator = require("./calculator");

try {
    console.log("10 / 5 = " + Calculator.div(10, 5));
    //Show error
    //Calculator.sqrt(25);
} catch (error) {
    throw new Error("Sorry, the app finded a problem: " + error);
} finally {
    console.log("Function is called.");
}