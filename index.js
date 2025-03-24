const express=require("express")
const app =express();

//console.dir(app);

let port=5204;

app.listen(port , ()=>{
    console.log(`app is listening on port..${port}`)
})