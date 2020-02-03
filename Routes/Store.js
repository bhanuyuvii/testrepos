var express=require('express');
var mongoose=require('mongoose');
var Promise=require('promise');
const fetch = require('node-fetch');

///const Nexmo=require('nexmo');
const url = "http://dummy.restapiexample.com/api/v1/employees";
/*const nexmo = new Nexmo({
  apiKey: '4df62520',
  apiSecret: 'au7nvQz4JvCW2ICf',
  .//https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
});*/
var router=express.Router();
/*router.get('/send',function(req,res)
{
  
  const from = 'Nexmo';
const to = '+918132873934';
const text = 'Hello from Nexmo';
res.send("Message sent to  "+to);
nexmo.message.sendSms(from, to, text);
 
})*/

mongoose.connect('mongodb://localhost:27017/store');
//var app=express();

var productSchema=mongoose.Schema({
    title:String,
    type:String,
    Quantity:String,
    price:String
})
var Product = mongoose.model("Product", productSchema);
router.get('/sample',function(req,res,next)
{
const getdata=async url=>
{
  try{

    const response = await fetch(url);
    const resjson = await response.json();
    console.log(resjson);
    res.send(resjson);
  } catch (error) {
    console.log("Could Not Load");
    res.send("Error occured");
  }
  }
  getdata(url);
});










router.get('/data',function(req,res,next)
{
 
console.log("Getting Records");
return new Promise(function(resolve,reject)
{
  Product.find(function(error,response)
  {
    if(error) 
    {reject("Cannot Load");
  throw (error);}
    else
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
router.get('/home',function(req,res,next)
{
var info=req.body;
var newproduct=new Product({
  title:info.title,
  type:info.type,
  Quantity:info.quantity,
price:info.price
})
alert(newproduct);
newproduct.save(function(err,Product)
{   
  if(err) res.send("Error in saving");
  else
  
  res.send("Saved Successfully");
})

//C:\Users\Appirio - 14033\Desktop\Server\Routes\Store.js
});
/*router.get('/data',function(req,res)
{1
Product.find(function(error,response)
{res.send(response);
})    

})*/
router.get('/data/namefilter/:title',function(req,res)
{
Product.find({title:req.params.title},function(error,response)
{
    res.send(response);
})    

})
router.use('/check/:input',function(req,res,next)
{
function getresult()
{
  console.log("Check Working");
  return new Promise(function(resolve,reject)
  {

if(req.params.input==10)
resolve("Its Correct Output");
else
reject("Wrong Calculation");


  })
}
getresult().then(result=>
  {
    console.log(result);
    res.json(result);
  }).catch(result=>
    {
      console.log(result);
      res.json(result);
    })
  


})
router.get('/data/typefilter/:type',function(req,res)
{
Product.find({type:req.params.type},function(error,response)
{

  //  res.send(req.params.type)
    res.send(response);
})    

})
router.get('/data/quantityfilter/:quantity',function(req,res)
{
Product.find({Quantity:req.params.quantity},function(error,response)
{

  //  res.send(req.params.type)
    res.send(response);
})    

})
router.get('/data/quantityandtype/:quantity&:type',function(req,res)
{
Product.find({Quantity:req.params.quantity,type:req.params.type},function(error,response)
{

  //  res.send(req.params.type)
    res.send(response);
})    

})
router.get('/data/brandandtype/:title&:type',function(req,res)
{
Product.find({title:req.params.title,type:req.params.type},function(error,response)
{

  //  res.send(req.params.type)
    res.send(response);
})    

})
router.get('/:name&:rollno',function(req,res)
{
    res.send("Hello" +req.params.name +"With rollno="+req.params.rollno)
})

module.exports=router;
