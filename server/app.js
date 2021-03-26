// require and invoke express
const express = require('express')
const app = express()
// server will be listening on this port
const PORT = process.env.PORT || 5000

// when user makes a get request
app.get('/',(req,res)=>{
    res.send("Hello world")
})

// executes when server starts listening on this port
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})