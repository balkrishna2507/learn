const coding = ["c","cpp","java","py","js","helo"]
coding.forEach( function(item){
    // console.log(item);
    
})

coding.forEach( (item) => {
    // console.log(item);
    
})

function printME(item){
    // console.log("print me");
    
}
coding.forEach(printME)

coding.forEach( (item,index,arr) =>{
    // console.log(item,index,arr);
    
})

const myCoding =[
    {
        langName:"java",
        fileName:".java"
    },
    {
        langName:"javascript",
        fileName:".js"
    },
    {
        langName:"python",
        fileName:".py"
    }
]

myCoding.forEach((item)=>{
    console.log(item,item.fileName,item.langName);
    
})