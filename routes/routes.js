const router= require('express').Router();


router.get('/users',(req,res)=>{
    res.send("all users")
    console.log("route here");
})

module.exports= router;
