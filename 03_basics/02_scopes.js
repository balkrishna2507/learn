let a = 300;
if(true){
    let a = 10
const b = 20
var c = 30
//console.log(a);

}

//console.log(a);

//don't use var because of the scope problem.


//nested scope 
function one() {
    const username = "hello"
    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()

if (true) {
    const username = "helo"
    if (username=="helo") {
        const website = " twitter"
        //console.log(username+website);
        
    }
    // console.log(website);
    
}
    // console.log(username);
    

    console.log(addOne(5));
    
    function addOne(num) {
        return num+1
    }
    addOne(5);

    // console.log(addTwo(5));
    
    const addTwo = function (num) {
        return num+2;
    }
    addTwo(5)

