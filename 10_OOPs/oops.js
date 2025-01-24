const user = {
    userName : "hello",
    password : "hello@123",
    loginCount : 8,

    getUserDetails:function(){
    //console.log("Got user from database");
    //console.log(`${this.userName}`);
    console.log(this);
    
    }

}

//console.log(user.userName+" "+user.password+" "+user.loginCount);
console.log(user.getUserDetails());
console.log(this);

//new is a constructor function
//const date = new Date()
//const promise = new Promise()

function User(username,loginCount,isLoggedIn){
    this.userName = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}
const UserOne = new User("hello11","hello12",'hello13')
const Usertwo = User("hello21","hello22",'hello23')
console.log(UserOne);
console.log(Usertwo);
