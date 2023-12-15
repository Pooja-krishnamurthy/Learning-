const express =require("express")
const app = express()   
const router = require("./router.js")

app.use("/about",router)
app.use("/contact",router)

// app.get("/",(req,res)=>{
//     res.json("Exprees app")
// })

app.listen(3000,()=>{
   console.log("listening  exprees app at 3000")
})
