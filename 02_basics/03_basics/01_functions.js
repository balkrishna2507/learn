// console.log("h");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");

function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}
// sayMyName()

// function addNumbers(number1,number2){
//     console.log(number1+number2);
// }
const result = addNumbers(4,null)
// console.log(result);

function addNumbers(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2
}
const result1 = addNumbers(4,5)
// console.log(result1);

function loginMessage(username="heloo"){
    //if(!username)
    if (username==undefined) {
        console.log("plz enter username");
        return;
    }
    return `welcome ${username}`
}
console.log(loginMessage("halu"));

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(56,1,2));

const user = {
    username:"hello",
    price:345
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"sawan",
    price:34
})

const myNerArr = [100,200,400]

function returnValue(myarr) {
    return myarr[2]
}
console.log(returnValue(myNerArr));
