const express = require('express')
const router = express.Router()

// // basic route testing
// router.get('/',(req,res)=>{
//     res.send("hello")
// })

// signup routes
router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!email || !password || !name){
        res.status(422).json({error:"please add all the fields"})
    }
    res.json({message:"successfully posted"})
  })

module.exports=router
