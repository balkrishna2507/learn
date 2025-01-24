//ES6

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email 
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const hello = new User("hello","helo@gmail.com","123")
console.log(hello.encryptPassword());
console.log(hello.changeUsername());

//behind the scene

function User1(username,email,password){
    this.username = username
        this.email = email 
        this.password = password
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const hello1 = new User1("hello","helo@gmail.com","123")
//console.log(hello1.encryptPassword());
console.log(hello1.changeUsername());
console.log(hello1.encryptPassword());
