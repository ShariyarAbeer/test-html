const number = 5;
const output = Math.abs(-5);
// console.log(output) 


// const output1 = Math.ceil(5.2);
// const output1 = Math.floor(5.2);
//  const output1 = Math.round(5.2);
//  const output1 = Math.round(5.4);
//  const output1 = Math.round(5.5);
//  const output1 = Math.max(5,2);
//  const output1 = Math.min(5,2);
//  const output1 = Math.random();
//  const output1 = Math.random()*10;  //10 er modde random ashbe
//  const output1 = Math.random()*10;
// let outPutRound = Math.round(output1)
//  outPutRound +=1;
// console.log(outPutRound) 



// function sixxer(number){
//    for(let i = 0 ; i<=number;i++){
//         const output1 = Math.random()*10;
//     let outPutRound = Math.round(output1)
//  outPutRound +=1;
//   return outPutRound;
//    }
  

// }

// console.log(sixxer(12));


function sixxer(number1,number2,number3){
 let outPutRoundMin = Math.min(number1,number2,number3);
 
  return outPutRoundMin;
   }
function sixxer2(number1,number2,number3){

 let outPutRoundMax = Math.max(number1,number2,number3);
  return outPutRoundMax;
   }
  

console.log(sixxer(12,15,16));
console.log(sixxer2(12,15,16));