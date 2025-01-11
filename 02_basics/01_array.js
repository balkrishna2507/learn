const myArr = [1,2,3,4,5,"hello",true]
console.log(myArr[3]);
const myHeros = ["hero1","hero2","hero3"]
console.log(myHeros);
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2]);



//myArr methods

myArr2.push(123)
console.log(myArr2);
myArr2.pop()
console.log(myArr2);
myArr2.shift()
myArr2.unshift()
console.log(myArr2.includes(3));
console.log(myArr2.indexOf(3));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);


//slice and splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log("B ",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log("c ",myArr);
console.log(myn2);