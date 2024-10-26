const router= require('express')();
const PORT=3000;

router.get('/user/register',(req,res)=>{
    res.send("success")
})

router.listen(PORT,()=>{
    console.log(`Server Start http://localhost:${PORT}`);
    
})