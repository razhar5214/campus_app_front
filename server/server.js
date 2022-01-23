const express = require("express")
const app = express()

app.get('/CampusList', (req,res)=>{
    console.log("User trying to get to home page");
    res.send("hiiii");
})

app.listen(3001)


//express server
//front end server
