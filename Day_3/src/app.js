// Main purpose of this file is to create a server

const express= require("express")

const app = express() // Storing the instance of a server in a variable app


const notes = []

app.use(express.json())

app.post('/notes', (req,res)=> {
    notes.push (req.body)

    res.status(201).json({
        message:"note created succesfully" 
     })
})


app.get("/notes", (req,res)=>{
     res.status(200).json({
        notes :notes,
        message: "notes fetched succesfully"
     })
})

 module.exports = app