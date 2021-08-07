// 12 inch = 1 feet 

function inchToFeet(number){
    const feetNumber = number/12;
    return feetNumber;
}

function feetToInch(number){
    const inchNumber = number*12;
    return inchNumber;

}

const inchOut = feetToInch(4);
const feetOut = inchToFeet(24);

console.log(inchOut);
console.log(feetOut);