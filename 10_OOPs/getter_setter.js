class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
        this._email = email;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(password){
        this._password = password
    }
}

const hello = new User("hello1","123av")
console.log(hello.password);
console.log(hello.email);

