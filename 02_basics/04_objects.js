//singleton
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = 1232;
tinderUser.name = "helo"
tinderUser.email = "@gmail.com"
// console.log(tinderUser);
const regularUser = {
    name:"helo2",
    full_name :{
        first_name:"he",
        last_name:"loo"
    }
}

// console.log(regularUser.full_name.first_name,regularUser.full_name.last_name)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id1:12,
        email:"@gmail.com"
    },
    {
        id1:13,
        email:"@gmail.com"
    },
    {
        id1:14,
        email:"@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('email'));

//deStructuring
const course = {
    courseName:"hello",
    coursePrice:123,
    courseInstructor:"helo sir"
}

console.log(course);

const {courseInstructor:intructor} = course
console.log(intructor);

//api
//json

// {
//     name:"sa",
//     id:12,
//     city:"indore"
// }