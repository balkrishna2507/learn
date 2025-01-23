const promiseOne = new Promise(function(resolve,reject)  {
    //do an asyc task
    //DB calls , cryptography , network call
    setTimeout(function(){
        // console.log("async task is completed");
        resolve()
    },1000)

})

promiseOne.then(function(){
   // console.log("promise consumed");
    
})

new Promise(function(resolve,reject)  {
    //do an asyc task
    //DB calls , cryptography , network call
    setTimeout(function(){
        //console.log("async 2  task is completed");
        resolve()
    },1000)

}).then(function(){
    // console.log("promise 2  consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"hello",
            email:"hello@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        //let error = true;
        let error = false;
        if(!error){
            resolve({username:"hello",
                password:"hello@gmail.com"
            })
        }  else{
            reject("ERROR : Something went wrong!")
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
    
    
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
    
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        //let error = false;
        if(!error){
            resolve({username:"hello00000",
                password:"hello@gmail.com"
            })
        }  else{
            reject("ERROR : hellooooo went wrong!")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log('E :',error);
        
//     }
    
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
} )
.catch((error) =>console.log(error))