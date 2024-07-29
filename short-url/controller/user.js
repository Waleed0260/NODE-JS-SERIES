const user = require("../models/user")
const {v4: uuidv4} = require("uuid")
const {setUser} = require("../service/auth.js")
async function handleUserSignUp (req, res){
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password
    })
    return res.json({status:"success"})
}

async function handleUserLogin (req, res){
    const {email, password} = req.body;
    const use = await user.findOne({email, password})
    if (!use) {
        return res.render("login", {error: "invalid username and password"})
    }
    const sessionId = uuidv4();
    setUser(sessionId, use)
    res.cookie("uuid", sessionId)
    return res.redirect("/");
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}