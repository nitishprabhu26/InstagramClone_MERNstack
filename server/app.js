// require and invoke express
const express = require('express')
const app = express()
// server will be listening on this port
const PORT = process.env.PORT || 5000
// Install a package mongoose, which makes easier to perform queries and makes easier to communicate with mongoDB
const mongoose = require('mongoose')

const {MONGOURI} = require('./keys')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})

// callback function fires when successfully connected to database
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo")
})
// on eror
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

// registering the model
require('./models/user')




// // custom middleware
// const customMiddleware = (req,res,next)=>{
//     console.log("middleware executed!!")
//     // will stop the current middleware and goes to next middleware 
//     // or 
//     // will stop the current middleware and execute the code further
//     next()
// }

// // all the routes will first go through the middleware, to make middleware run for all the routes defined for app
// // app.use(customMiddleware)


// // when user makes a get request
// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("Hello world")
// })

// // app.get('/about',(req,res)=>{
// //     console.log("about")
// //     res.send("Hello world")
// // })

// // To make middleware run for a particular route
// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("Hello world")
// })


// executes when server starts listening on this port
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})