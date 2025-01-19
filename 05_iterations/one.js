//for loop

for(let i = 0;i<=10;i++){
    // console.log(i);
    if (i==5) {
        // console.log("5 is the best number");
        
    }
    
}

for (let i = 0; i < 5; i++) {
    // console.log(`outer loop : ${i}`);
    
    for (let j = 0; j < 5; j++) {
        // console.log(`inner loop ${j}`);
        // console.log(i+"*"+j+" = "+i*j);
        
        
    }
    
}

let myArray = ["flash","batman","hello"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
    
}

//break and continue keyword

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is the best number");
        break;
        
    }
    console.log(`value of i is ${i}`);
    
    
}

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log("5 is the best number");
        continue;
        
    }
    console.log(`value of i is ${i}`);
    
    
}