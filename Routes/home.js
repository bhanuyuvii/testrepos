var express=require('express');
var router=express.Router();
router.get('/',function(req,res)
{
    res.send("Hi hommie");
})
router.get('/:id[0-9]{2}:name',function(req,res)
{
    res.send("You selected author with id="+req.params.id+"and name="+req.params.name)

});
module.exports=router;