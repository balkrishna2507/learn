let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());


let myCreatedDate = new Date("2025-01-10");
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getFullYear())

newDate.toLocaleString('dafault',{
    weekday:"long",
     hour:"numeric",
     
})



