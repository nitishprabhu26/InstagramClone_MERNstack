const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const User = mongoose.model("User")

const bcrypt = require('bcryptjs')
//JWT
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')

const requireLogin = require('../middleware/requireLogin')

// // basic route testing
// router.get('/',(req,res)=>{
//     res.send("hello")
// })

// // /test route fot creating middleware to verify token
// router.get('/protected',requireLogin, (req, res) => {
//     res.send("hello user")
// })

// signup routes
router.post('/signup', (req, res) => {
    const { name, email, password, pic } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" })
            }
            bcrypt.hash(password, 12)
                .then(hassedpassword => {
                    const user = new User({
                        email,
                        password:hassedpassword,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "saved successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })

                })
        })
        .catch(err => {
            console.log(err)
        })
})

// signin route
router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "please add email or password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or password" })
            }
            // doMatch is a boolean value
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.json({message:"successfully signed in"})
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        res.json({token})
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or password" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})


module.exports=router
