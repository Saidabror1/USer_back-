const express = require('express');
const User = require("../model/User")

const router = express.Router();

/* GET all users. */
router.get('/', async function(req, res, next) {
  let data = await User.find({})
  if (!data) {
    res.json({title:"get error",err})
  } else{
    res.json({title:"get succes",data})
  }
});

// User add
router.post('/', function(req, res, next) {
  User.create(req.body,(err,data)=>{
    if(err){
      res.json({title:"create error",err})
    } else{
      res.json({title:"create succes",data})
    }
  })
});

module.exports = router;
