const express = require("express");
const router = express.Router();

// router.get("/", function (req, res){
//     res.send("게시글 조회");
// });

router.get("/", (req, res)=>{
    res.send("게시글 조회");
});


// router.post("/", function (req,res){
//     res.send("게시글 생성");
// });

router.post("/",  (req,res)=>{
    res.send("게시글 생성");
});
module.exports = router;