const express   = require('express');
const main      = require('./route/main.js');

const app       = express();
const Port      = 3000;


app.use('/', main);


app.listen(Port, ()=>{
    console.log(__dirname);
    console.log("start server");
});