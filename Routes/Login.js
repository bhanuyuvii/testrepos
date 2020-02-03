var express=require('express');
var mongoose=require('mongoose');
var Promise=require('promise')
var router=express.Router();
mongoose.connect('mongodb://localhost:27017/store');
var userSchema=mongoose.Schema({
  name:"String",
  mail:"String",
  password:"String",
  contact:"String",
  address:[],
  cart:[],orders:[],
  savedcards:[]
})
var Users= mongoose.model("users", userSchema);
router.get('/users',function(req,res,next)
{
 console.log("Getting Users");
return new Promise(function(resolve,reject)
{
  Users.find(function(error,response)
  {
    if(error) 
    {reject("Cannot Load");
   throw error; 
  }else
    {
    resolve(response);console.log(response);
 res.send(response);
}
  })
}).catch(error=>res.send(error));
  
/*  getdata().then(result=>
    {
      console.log(result);
      res.json(result);
    })*/
  
})
router.get('/users/:mail',function(req,res,next)
{
  console.log("Getting password");
  return new Promise(function(resolve,reject)
  {
Users.find({mail:req.params.mail},function(error,response)
{
  if(error) 
  { reject(error);
  
    throw (error);
   
    }  else
  resolve(response);
  res.send(response);

})


  }).catch(error=>res.send(error));
})

module.exports=router;


