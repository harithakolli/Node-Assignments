
const express = require('express');

const Router = express.Router()
const Offers = require("./models/Offers")
const UserData = require("./models/Player")


Router.post("/login",async(req,res)=>{

  try{
    const userName = req.body.userName;
    const password = req.body.password;
     
    const Result = await UserData.findOne({userName:userName})

      if(!Result){
          res.status(400).send({
            msg:"Incorrect username or passward"
      })
      }
      else{
        if(Result.password===password){
          res.status(200).send({
            msg:"Loggin Successful"
          })
        }
      }
    
  }
  catch(error){
     
    console.log(error)
  }

})

Router.post("/Registration",async(req,res)=>{
  try{
    const Result = await UserData.create(req.body)

      res.send({
        msg:"Registration Successful",
        Result
      })
     
      console.log(Result)
  }
  catch(error){
     
    console.log(error)
  }

})

Router.get('/offers',async(req,res)=>{
    
   try{

   const  pageNo = req.query.page;
   const  Records = req.query.Records;
   const  atribute = req.query.atribute;
   const query = req.query.query;
       
    const Result = await Offers.find({ atribute:query},{},{limit:Records, skip:(pageNo-1)*Records})
    
        res.status(200).json({
          "page": pageNo,
          "has_more":false,
          Result
        }) 
   }
   catch(error){
    console.log(error)
   }

})


Router.post('/offers',async(req,res)=>{
   
     try{
      const Result = await Offers.create(req.body)
    console.log(Result)}
      catch(error){
        console.log(error)
      }
})


Router.put('/offers/:id',async(req,res)=>{
   
    try{
     const _id = req.params.id;
     const Result = await Offers.findByIdAndUpdate(_id,(req.body) )
      console.log(Result)
      res.status(200)
    }
     catch(error){
       console.log(error)
     }
})

Router.delete('/offers/:id',async(req,res)=>{
    try{
     const _id = req.params.id;
     const Result = await Offers.findByIdAndDelete(_id)
      console.log(Result)
      res.status(200)
    }
     catch(error){
       console.log(error)
     }
})


module.exports = Router;
