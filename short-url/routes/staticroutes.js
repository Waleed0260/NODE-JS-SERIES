const express = require("express");

const router = express.Router();

router.get("signup", (req, res)=>{
    return res.render("signUp")
})

router.get("login", (req, res)=>{
    return res.render("login")
})

module.exports = router;