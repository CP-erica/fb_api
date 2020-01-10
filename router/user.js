const express = require('express')
const User=require('../models/taskone')
const router = new express.Router()

router.get('/', async (req, res)=>{
    console.log("hey")
})


router.post("/upload", (req, res)=>{
    //console.log(req.body)
    var myData= new User(req.body);
    myData.save();
})

router.get("/Task", function(req, res){
    User.find().then(function(user){
        res.send(user);
    }).catch(function(e){
        res.send(e)
    });
})


router.delete('/deleteuser/:id',function(req, res){
    //console.log(req.params.id);
    task.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted")
    }).catch(function(){
        res.send(e)
    });
})

router.put('/updates/:id',function(req, res){
    //console.log(req.params.id);
    task.findByIdAndUpdate({_id :req.params.id}, req.body).then(function(){
        res.send("Updated")
    }).catch(function(e){
        res.send(e)
    });
})

module.exports=router