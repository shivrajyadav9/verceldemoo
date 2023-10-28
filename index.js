import express from 'express';
const port =7000;
const app=express();

app.get('/',function(req,res){
    res.json({
        message:"vercel working"
    })
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})