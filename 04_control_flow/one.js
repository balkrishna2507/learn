if (2<=3) {
    console.log("true");
}
else{
    console.log("false");
    
}

// < , > , <= , >= , == , !=,===(check datatypes)

const tempature = 15;
if (tempature<20) {
    console.log("it is cold");
    
} else {
    console.log("it is warm ");
}

const sccore = 200
if (sccore>100) {

    let power = "fly"
    console.log(`the power is ${power}`);
    
} else {
    let power = "swim"
    console.log(`the power is ${power}`);
    
}

//short_hand notation
const balance = 1000;
if(balance==1000) console.log("nice")

    //nesting (nested condition)
    const score = 500;
    if (score>400) {
        console.log("excellent");
        
    } else if(score>300) {
        console.log("very good");
        
    }
    else if(score>200) {
        console.log("good");
        
    }
    else{
        console.log("bad");
        
    }

    const isLoggedIn = false;
    const debitCard = true;
    if (isLoggedIn==true && debitCard==true) {
        console.log("Good to go");
        
    } else {
        console.log("not ready");
        
    }


    const loginByEmail = false
    if (loginByEmail || isLoggedIn) {
        console.log("welcome");
        
    } else {
        console.log("plz login ");
        
    }
