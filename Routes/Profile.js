var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var Promise=require('promise');
mongoose.connect('mongodb://localhost:27017/store');
var userSchema=mongoose.Schema({
    userid:String,
    contact:String,
    password:String
})
//var user=mongoose.model('User',userSchema);
router.get('/get',function(req,res)
{
    res.send("Its working");
})
/*router.get('/:userid',function(req,res,next)
{
    function getdata()
{
    console.log("Getting Record for the user");
    return new Promise(function(resolve,reject)
    {
        user.find({userid:req.params.userid},{userid:1,contact:1,password:0},function(error,response)
        {
            if(error || response.length===0) reject("Error in Loading Page");
            else
            resolve(response);

        })

    })
}
getdata().then(result=>
    {
        console.log(result);
        res.json(result);
    })
})*/
module.exports=router;
