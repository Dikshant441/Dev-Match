const express = require("express");

const app = express();

app.use("/hello",(req, res)=> {
    res.send("Hello from the /hello")
})

app.use("/test",(req, res)=> {
    res.send("Hello from the dikjd")
})

app.use("/",(req, res)=> {
    res.send("Hello from the /")
})

app.listen(3000, ()=>{
    console.log("Server is runnig on at localhost 3000")
});