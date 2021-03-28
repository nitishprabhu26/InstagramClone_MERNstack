const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")

// route to get all posts
// since an id is stored in database(instead of the object) and hence, will send a response as objectid. but we want object 
// .populate("parameter that we want to populate in the response","fields within that object, rest will be hidden")
router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})


// route to create a post
router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,pic} = req.body 
    if(!title || !body ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    // else the password will be stored and sent in the response, as a part of user object
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=router