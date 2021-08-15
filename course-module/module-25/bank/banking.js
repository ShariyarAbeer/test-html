document.getElementById("deposite-button").addEventListener("click", function(){
    //input Deposite get id and convert to float
    const inputDeposite = document.getElementById("input-deposite");
    const inputDepositeValue = parseFloat(inputDeposite.value);
    //total Deposite get id and convert to float
    const totalDeposite = document.getElementById("total-deposite");
    const totalDepositeValue = parseFloat(totalDeposite.innerText);
    //total get id and convert to float
    const total = document.getElementById("total");
    const totalValue = parseFloat(total.innerText);
    //new deposite value
    const newTotalDeposite = totalDepositeValue + inputDepositeValue;
    //new total
    const newTotal = totalValue + inputDepositeValue;
    //set neww deposite value
    totalDeposite.innerText = newTotalDeposite;
    //set neww total value
    total.innerText = newTotal;
    // console.log(totalDeposite.innerText);
    // console.log(total.innerText);
});
document.getElementById("withdraw-button").addEventListener("click",function(){
    //input withdraw get id and convert to float
    const inputWithdraw = document.getElementById("input-withdraw");
    const inputWithdrawValue = parseFloat(inputWithdraw.value);
    //total withdrow get id and convert to float
    const totalWithdrow = document.getElementById("total-withdrow");
    const totalWithdrowValue = parseFloat(totalWithdrow.innerText);
    //total get id and convert to float
    const total = document.getElementById("total");
    const totalValue = parseFloat(total.innerText);
    //new Withdrow
    const newWithdrow = totalWithdrowValue + inputWithdrawValue;
    //new total
    const newTotal = totalValue - inputWithdrawValue;
    //set neww total value
    totalWithdrow.innerText = newWithdrow;
    //set neww total value
    total.innerText = newTotal;

    
});
