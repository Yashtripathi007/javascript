import express from "express"
const app=express();
const port=4000;


app.get("/",(req,res)=>{

    res.render("index.ejs",{daytype:"weekday",achive:"be on time"});
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});