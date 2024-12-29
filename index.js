const tasks=[
    {
        id:1,
        task:"sona nahe he shayan",
    },
    {
        id:2,
        task:"jagh na  he shayan",
    },
    {
        id:3,
        task:"concept samjha  he shayan",
    },
]

import express  from "express";
const app =express();
const PORT = 4000;

app.get('/',(req , res)=>{
    res.status(200).send(tasks)
});

app.post('/',(req , res)=>{
    res.send('Post request is called' )
});

app.put('/',(req , res)=>{
    res.send('Put request is called' )
});

app.delete('/',(req , res)=>{
    res.send('delete request is called' )
});
app.listen(PORT,()=>console.log("Server is running on PORT "+PORT))