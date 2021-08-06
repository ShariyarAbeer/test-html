// 97-100	A+	4.00
// 90 - below 97	A	4.00
// 87 - below 90	A-	3.70
// 83 - below 87	B+	3.30
// 80 - below 83	B	3.00
// 77 - below 80	B-	2.70
// 73 - below 77	C+	2.30
// 70 - below 73	C	2.00
// 67 - below 70	C-	1.70
// 63 - below 67	D+	1.30
// 60 - below 63	D	1.00
// below 60	F	0.00

function grade(number){
    if(97<=number){
        return "Your grade is A+"
    }else if(number<97 && number>=90){
        return "Your grade is A"

    }else if(number<90 && number>=87){
        return "Your grade is A-"
    }
    else if(number<87 && number>=83){
        return "Your grade is B+"
    }
    else if(number<83 && number>=80){
        return "Your grade is B"
    }
    else if(number<80 && number>=77){
        return "Your grade is B-"
    }
    else if(number<77 && number>=73){
        return "Your grade is C+"
    }
    else if(number<73 && number>=70){
        return "Your grade is C"
    }
    else if(number<70 && number>=67){
        return "Your grade is C-"
    }
    else if(number<67 && number>=63){
        return "Your grade is D+"
    }
    else if(number<63 && number>=60){
        return "Your grade is D"
    }else{
        return "You fail and your grade is F"
    }
    
}
let number = grade(59)
console.log(number)