const score = 400;
const balance = new Number(100)
console.log(score);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));


const anotherNUmber = 45.53565;
console.log(anotherNUmber.toPrecision(4));

const hundred = 105656760;
console.log(hundred.toLocaleString('en-in'));

//+++++++++++++++++++++++++++++++++++++  Maths Library
let x = -100;
console.log(Math.abs(x));
console.log(Math.sqrt(4));

console.log(Math.floor(Math.random()*10+1));

const min = 10,max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+(min)));
