const express = require("express");

const app = express() //Server instance created and stored in app variable

app.get("/",(req,res) =>{
    res.send("Hello Shrey")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.listen(3000) //Server Started