let firstNumber = 12;
let secondNumber = 16;
let temp = 0;
console.log("firstNumber "+firstNumber+ " secondNumber "+ secondNumber);

temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
console.log("firstNumber "+firstNumber+ " secondNumber "+ secondNumber);

[firstNumber,secondNumber] = [secondNumber,firstNumber]
console.log("firstNumber "+firstNumber+ " secondNumber "+ secondNumber);