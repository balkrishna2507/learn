const username = "hellooo"
if (username) {
    console.log("got username");
    
} else {
    console.log("don't have an account");
    
}

//falsy values => false,0,-0, 0n in (bit int), null , undefined , NaN

//trthy values =>"0"(0 in string) , "false" (in string ) , empty array[] , empty object{} , empty function(){},
//we can check the length of array 
if (username.length==0) {
    console.log(false);
    
}

const emptyObject = {}
if (emptyObject) {
    console.log("not empty");
    
} else {
    console.log("empty");
    
}

if(Object.keys(emptyObject).length!=0){
    console.log("not empty");
    
}
else{
    console.log("empty");
    
}

if(false==0)
    console.log(true);
    
//nullish coalescing operator(??):not defined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 16
console.log(val1);

//ternary opearator
//condition ?true:false

const iceCream = 9
iceCream >50 ?console.log("costlier"):console.log("cheap");


