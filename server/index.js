const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require ("express")

const app = express();

app.get('/', (req, res)=>{
    return res.send("hello home page")
})
app.get('/about', (req, res)=>{
    return res.send(`hello about page` + req.query.name)
})

// const server = http.createServer((req, res)=>{
//     console.log("req received")
//     // if (req.url === "favicon.ico") return res.end();
//     if (req.url === "/favicon.ico") {
//         res.statusCode = 204; // No Content
//         return res.end();
//     }
//     const log = `${Date.now()}: ${req.method} hello I'm new user ${req.url}\n`
//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl);
//     fs.appendFile("./log.txt", log, (err, result)=>{
//         switch(myUrl.pathname) {
//             case "/":
//             // const name = myUrl.pathname;
//             res.end(`this is / page`);
//             break;
//             case "/about":
//                 res.end(`this is about page ${myUrl.query.search}`)
//                 break;
//                 default:
//                     res.end("end")
//                     break;
//         }
//         if (err) {
//             console.log(err);
//         }
//         if (result) {
//             console.log(result) 
//         }
//     })
//     // res.end("hello from server")
//     // res.writeHead
// })

app.listen(8000, ()=> console.log("server started"))

// const server = http.createServer(app);
// server.listen(8000, ()=>console.log("consoling port on server"))