const express   = require('express');
const router    = express.Router();
const path      = require('path');
const srcPath   = path.join(__dirname, "../src/");

router.get("/", (req, res)=>{
    console.log(srcPath + "index.html");
    res.sendFile(srcPath + "index.html", (err)=>{
        if(err){
            console.log(err);
            res.end();
        }
    });
});

module.exports = router;