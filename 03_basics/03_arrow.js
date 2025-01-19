const user = {
    username:"hello",
    price:99,
    welcomeMessage : function(){
        //console.log(`${this.username},welcome to website `);
        // console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sammy"
user.welcomeMessage()
//console.log(this);

function chai(){
    let username = "helo"
    //console.log(this);
    // console.log(this.username);
    
}
chai()

const one = function(){
    let username = "one"
    //console.log(this.username);
    
}

const two = () => {
    let username = "two"
    // console.log(this.username);
    // console.log(this);
}

// const addNum  = (num1,num2) => {
//     return num1+num2
// }

// console.log(addNum(4,5));

const addSum = (num1,num2) => (num1+num2)
console.log(addSum(7,8));

const addTwo = (num1,num2) => ({username:"helooo"})
console.log(addTwo(3,5));

