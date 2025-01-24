function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase() ;
        },
        set:function(value){
            this._email = value
        }
    })

    Object.defineProperty(this,'passworwd',{
        get:function(){
            return this._password.toUpperCase() ;
        },
        set:function(value){
            this._password = value
        }
    })

}

const hello = new User("hello34","hell")
console.log(hello.email);
console.log(hello.password);
