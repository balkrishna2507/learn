const myObject = {
    js:"javascript",
    jv:"java",
    rb:"ruby"
}

for (const key in myObject) {
    console.log(key,myObject[key]);
    
}

const lang = ["java","c","js","cpp"]
for (const key in lang) {
    console.log(key,lang[key]);
    
}