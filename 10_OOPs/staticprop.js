class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username :${this.username}`);
        
    }

    createId(){
        return `123`
    }
}

const hello = new User("hello")
console.log(hello.createId());
