// let arry = []

// function addArray(number){
//     for(let i = 0;i<=number;i++){
//         const rdNumber = Math.random()*100;
//         let picked = Math.round(rdNumber);
       
//         if(arry.indexOf(picked) == -1){
//             arry.push(picked);
//         }else{
//             console.log(picked);
//         }

//     }
//     return arry;
// }

// console.log(addArray(12));

let arry = ["abul","babul","jabul","babul","kabul","jamalul","kabul","jabul"];
 let uniqe=[]
function addArray(arry){
    
    for(const element of arry){
       
       
        if(uniqe.indexOf(element) == -1){
            uniqe.push(element);
        }else{
            console.log(element);
        }

    }
    return uniqe;
}

console.log(addArray(arry))