const express=require("express");
const req = require("express/lib/request");
const app =express();

//console.dir(app);

let port=5204;

app.listen(port , ()=>{
    console.log(`app is listening on port..${port}`)
})

// app.use((req,res)=>{
//  console.log("request received");
//  res.send("sending A response...")
// })

app.get("/",(req,res)=>{
    res.send("<h1>This is Home Page...</h1>")

})

// app.get("*",(req,res)=>{
//  res.send("The Page Cannot found please check path...")
// })

app.get("/:username/:id",(req,res)=>{
 let {username,id}=req.params;
 res.send(`<h1>Welcome to the page &nbsp;&nbsp;<u><i> @${username}..!</i></u><br> id:${id}</h1>`);
 
})


