const arry = [45,58,63,14,78,90,2,1,45,7]
let largest = arry[0];

// for(let i =0;i<arry.length;i++){
//     let element = arry[i];
//     if(largest<element){
//         largest = element;
       
//     }

// }
for(let i =0;i<arry.length;i++){
    let element = arry[i];
    if(largest>element){
        largest = element;
       
    }

}

 console.log(largest);