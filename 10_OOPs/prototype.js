let myName = 'hitesh'
console.log(myName.length);

let myHero = ["thor","spider-man"]
let heroPower = {
    thor : "hammer",
    spiderman:"slang",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hello = function(){
    console.log(`hello is present in all object`);
    
}
//myHero.hello()

Array.prototype.heyhero =  function(){
    console.log(`hellor from hero`);
    
}

myHero.hello()
myHero.heyhero()
//heroPower.heyhero()

//inheritence

const user= {
    name:"hello",
    email:"hello@gmail.com"
}
const teacher  = {
    makingVideo : true

}

const teachingAssistant  = {
    isAvailable : false
    
}
const TeachingSupport = {
    isAvailable : false
}

const taSupport  = {
    makeAssignmenet :"make javascript assignment",
    fullTime : true,
    __proto__ : TeachingSupport
    
}

teacher.__proto__ = user

//modern syntax

Object.getPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "hellowithhii      "


String.prototype.trueLength = function(){
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()