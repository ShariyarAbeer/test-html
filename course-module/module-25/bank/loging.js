document.getElementById("login-button").addEventListener("click", function(){
    const inputEmail = document.getElementById("input-email");
    const email = inputEmail.value;
    const inputPassword = document.getElementById("input-password");
    const password = inputPassword.value;
    if(email=="abeer@bank.com"&&password=="abeer"){
        window.location.href="./banking.html";
    }

  
})



