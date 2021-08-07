const fibo = [0,1];

// for(let i = 2;i<=10;i++){
//     fibo[i] = fibo[i-1]+fibo[i-2];
// }

// console.log(fibo);


function check(number){
    if(typeof(number!="Number")){
      
    return "Please enter a number"
    }else{
     for(let i = 2;i<=number;i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
    
    }
     return fibo
}
   
}

console.log(check("asas"));