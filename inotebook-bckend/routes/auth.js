const express = require('express');
const router=express.Router()
const User=require("../models/UserSchema")

router.post("/",(req,res)=>{
    res.json(req.body)
    const user=User(req.body)
    user.save()
})

module.exports=router