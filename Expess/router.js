const express = require("express")
const router = express.Router()

router.get("/about",(req,res)=>{
    res.send("Exprees from router")
})

router.post("/contact",(req,res)=>{
    res.send("Exprees from router contact")
})

module.exports = router