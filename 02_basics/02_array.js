const marvel_heros = ["thor","spider_man"]
const dc_heros = ["flash","batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[2]);

// const newmarvel_heros = marvel_heros.concat(dc_heros)
// console.log(newmarvel_heros);

//spread operator
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[1,2,3],5,6,[6,7,[8]]]
const an_another_array = another_array.flat(Infinity)
console.log(an_another_array);

console.log(Array.isArray("hello"));
console.log(Array.from("heloo"));
console.log(Array.from({name:"helloo"}));

let score3 = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score1,score2,score3));

