// Purpose of this is to start the sever 
const app = require ("./src/app") 

app.listen(8000, ()=>{
    console.log("server is running on port 8000")
})