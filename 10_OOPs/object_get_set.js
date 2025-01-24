const User = {
    _email : 'h@hc@gmail.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

}

const hello = Object.create(User)
console.log(hello.email);
