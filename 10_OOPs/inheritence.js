class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}


const hello = new Teacher ("t1","t1@sa.com","123")
hello.addCourse()
hello.logMe()
const hello1 = new User("u1")
hello1.logMe()
console.log(hello===hello1);
console.log(hello instanceof Teacher);
console.log(hello instanceof User);
