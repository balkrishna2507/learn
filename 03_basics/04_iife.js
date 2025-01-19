// Immediately Invoked Function Expressions (IIFE)
// function one(){
//     console.log(`DATABASE CONNECTED`);
// }
//one()

(function one(){
    console.log(`DATABASE CONNECTED`);
})();


//named iife
(function two(){
    console.log(`DATABASE CONNECTED2`);
})();


//named iife
(() => {
    console.log(`DATABASE CONNECTED3`);
})();

((name) => {
    console.log(`DATABASE CONNECTED3,${name}`);
})(" heeelo");