const fs = require("fs");
// const result = fs.writeFileSync('./text.txt', "testign the file with synchronous one time");
// console.log(result)
// fs.writeFile("./text.txt", "testing file with asynchronous one time", ()=> {})


// console.log("1");
// fs.readFile('./text.txt', "utf-8", (err, result)=>{
//     console.log(result);
// });
// console.log("2");
// console.log("3")
// console.log("4")
// const result = fs.readFileSync('./text.txt', "utf-8");
// console.log(result);
// console.log("55")


// fs.writeFileSync('./text.txt', "checking it works")


// const result = fs.readFileSync('./read.txt', "utf-8");
// console.log(result);

const result = fs.readFileSync('./text.txt', "utf-8")
console.log(result);
console.log("this console its after sync")
fs.readFile('./text.txt', "utf-8", (result, err)=> {
    if(err) {
        console.log(err);
    }
    if (result) {
        console.log(result)
    }
})
console.log("this console is after async ")


// fs.appendFileSync("./text.txt", `checking if appending working\n`)
// fs.appendFile("./text.txt", `appending working in asynchronous\n`, (err)=> {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("data entered")
//     }
// })

// fs.readFile('./text.txt', "utf-8", (err, result)=>{
//     console.log(result);
// });
// console.log("after async")

// fs.cpSync("./text.txt", "copy.txt")