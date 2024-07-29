const express = require("express");
const mongoose = require("mongoose")
const url = require("./models/url.js")
const shortID = require("shortid")
const userRouter = require("./routes/user.js")
const app = express();
const staticRouter = require("./routes/staticroutes.js")
const cookieParser = require("cookie-parser")
const {restrictUserLoggedIn} = require("./middleware/auth.js")
//const {handleUserSignUp} = require("./controller/user")
const path = require("path");
const { handleUserLogin } = require("./controller/user.js");
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect("mongodb://127.0.0.1:27017/short-url" ).then(()=>{
    console.log("connecterd tp DB")
}).catch(()=>
console.log("error")
)
app.use(cookieParser())


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/", staticRouter);
app.get("/", (req, res)=>{
    return res.render("home")
})
app.get("/login", (req, res)=>{
    return res.render("login")
})
app.get("/signup", (req, res)=>{
    return res.render("signUp")
})
app.use("/user", userRouter)

app.post("/url", restrictUserLoggedIn, async(req, res)=>{
    const link = req.body.url;
    const shortId = shortID()
    await url.create({
        shortId: shortId,
        redirectURL: link,
        visitHistory: []
    })

    res.json({id: shortId})
})

// app.get("/:shortid", async(req, res)=>{
//     const shortId = req.params.shortid;
//     const entry = await url.findOneAndUpdate({
//         shortId,
//     }, {$push: {
//         visitHistory: Date.now()
//     }})

//     res.redirect(entry);
// })

app.listen(8000, ()=> console.log("server started"))