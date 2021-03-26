const mongoose = require('mongoose')

// creating a schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// Creating a mongoose.model. 'User' is the name of the model
mongoose.model("User",userSchema)