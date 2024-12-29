

import express  from "express";
const app =express();
const PORT = 4000;

app.get('/',(req , res)=>{
    // console.log(req)
    res.send('hello world toI!' )
}); 

app.listen(PORT,()=>console.log("Server is running on PORT "+PORT))