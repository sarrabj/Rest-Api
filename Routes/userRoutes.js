const User = require('../models/User')

const express=require('express')
const router= express.Router()

router.post('/newUser',(req,res)=>{
    let newUser= new User(req.body)
    newUser.save((err,data)=>{
        if (err) throw err
        else res.send({msg:"contact added"})
    })
})
router.get("/getcontact",(req,res)=>{
    User.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
      
  })
  router.put("/update/:id",(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{...req.body},)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  })
  router.delete("/deleteOne/:id",(req, res)=>{
    User.findOneAndRemove({_id:req.params.id},{...req.body},)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  })
module.exports = router