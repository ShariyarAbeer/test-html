function isEven(number){
    if(number%2==0){
    const evenNumber = "This $number is a Even Number";
          return evenNumber;
    }
    const notEven = "This $number is a not Even Number"
    return notEven
}

function isOdd(number){
    if(number%2!=0){
        const oddNumber = "This $number is a Odd Number";
        return oddNumber
    }
     const notOdd = "This $number is a not Odd Number"
    return notOdd
}


// console.log(isEven(2))
// console.log(isEven(5))
// console.log(isOdd(3))
// console.log(isOdd(6))

// leap year

// function leapYear(year){
//     if(year%4==0 && year%100!=0|| year%400==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(leapYear(2000));