// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);

const hello = {
    name:'hello1',
    price:'250',
    isAvailable:true,

    orderHello :function(){
        console.log("code didn't worked");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(hello,"name"));

// Object.defineProperty(hello,'name',{
//     writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(hello,"name"));

for (let [key,value] of Object.entries(hello)) {
    if( typeof value != 'function')
        console.log(`${key} : ${value}`);
    
}