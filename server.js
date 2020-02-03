var express=require('express');
var cors=require('cors');

var bodyParser=require('body-parser');
var app=express();
app.use(cors());
app.use(bodyParser.json());
 app.get('/sample',function(req,res){
    res.sendFile(path.join(__dirname+'/routes/sample.html'));
   
  });
 
 app.use(bodyParser.json());

var port=4000;
var path=require('path');
var login=require('./Routes/Login.js');
var store=require('./Routes/Store.js');
var products=require('./Routes/Products');
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/store').then(
    ()=>
    {
        console.log("Connected to Database");
    }
)
.catch((err)=>
{
    console.log(err);
});
/*
var tempSchema=mongoose.Schema({
  name:"String",
  contact:"String"
})
var temp= mongoose.model("temp", tempSchema);


 app.post('/save',function(req,res)
 {
     console.log("Saving data");
     var newTemp=new temp({
         name:req.body.name,
         contact:req.body.contact
     })
     newTemp.save().then(item=>
        {
            res.send(item);
        }).catch(err=>
            {
                res.send(err);
            });
     
 })
 app.get('/all',function(req,res)
 {
     temp.find(function(response,error)
     {
      if(error)
      res.send(error);
      else
      res.send(response);   
     })
 })

*/

app.listen(port,function(req,res)
{
    //res.send("Server is Working");
    console.log("Server is working");
})
app.use('/store',store);
app.use('/login',login);
app.use('/products',products);


app.use('/home',function(req,res)
{
res.sendFile(path.join(__dirname+'/Forms/home.html'));

});
