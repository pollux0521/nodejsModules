const express   = require('express');
const app       = express();
const Port      = 3000;

app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/src/index.html`, (err)=>{
        if(err){
            console.log(err);
            res.end(err.message);
        }
    });
});

app.listen(Port, ()=>{
    console.log("start server");
});