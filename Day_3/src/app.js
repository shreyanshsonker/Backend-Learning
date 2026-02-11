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


app.delete("/notes/:index",(req,res)=>{
   const index= req.params.index

   delete notes[index]

   res.status(200).json({
      message:"note deleted successfully"
   })
})


app.patch("/notes/:index",(req,res)=>{
   const index=req.params.index

   const description = req.body.description

   notes[index].description=description

   res.status(201).json({
      message:"note updated successfully"
   })
})

 module.exports = app 