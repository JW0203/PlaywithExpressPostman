const express = require("express");
const router = express.Router();

router.get("/", function (req, res){
    res.send("사용자 정보 조회");
});

router.post("/", function (req,res){
    res.send("사용자 생성");
});

router.post("/sign-in", function (req, res){
    res.send("사용자 로그인");
});

router.put("/", function (req,res){
    res.send("사용 정보 수정");
});

router.delete("/", function (req,res){
    res.send("사용자 삭제");
});

module.exports = router;