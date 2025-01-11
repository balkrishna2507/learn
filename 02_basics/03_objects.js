
//object litetals

// Object.create(hello)
const mySym = Symbol("key1")

const jsUser = {
    name:"hello",
    age:18,
    [mySym]:"mykey1",
    "full name":"hello helo",
    email:"hello@gmail.com",
    Islogin:false
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
// Object.freeze(jsUser)


jsUser.email = "hello2payrm"
console.log(jsUser["email"]);

console.log(jsUser);

jsUser.greeating = function () {
    console.log("heelo users");
    
}

jsUser.greeatingtwo = function () {
    console.log(`name of user ${this.name}`)
    
}


console.log(jsUser.greeating);
console.log(jsUser.greeating());
console.log(jsUser.greeatingtwo());


