const coding = ["c","cpp","java","py","js","helo"]
const values = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNums.filter( (num) =>num>4)
// const newNum = myNums.filter( (num) =>{
//     return num>4;
// })
const newNum = [];
myNums.forEach( (num) =>{
    if (num>4) {
        newNum.push(num)
    }
})
console.log(newNum);

