const express = require("express");
const router = express.Router();

// 1.영화 등록 API
router.post("/", (req, res) =>{
    res.status(201).send({ id:1, titile: "인셉션"});
});


// 2. 영화 전체 조회 API
router.get("/", (req, res) => {
    res.send([
        {
            id: 1,
            title: "인셉션"
        },
        {
            id: 2,
            title: "존윅"
        }
    ]);
});

// 5. 영화 검색 API : 제목으로 검색
// (중요) 3번 예제(path parameter) 와 이 예제의 주소가 같다.
// 이럴 땐 앞에 있는 get method(3 번)이 먼저 실행 된다.
// 5번에서 query parameter 를 실행 하기 위해서 3번 예제 보다 앞으로 배치
// /search?존윅
router.get("/search", (req, res) =>{
    const resValue = [
        {
            id: 1,
            title: "존윅1"
        },
        {
            id: 2,
            title: "존윅2"
        }
    ];
    res.status(200).send(resValue);
})


// 3. 특정 영화 조회 API
router.get("/:searchMovieId", (req, res) => {
    const searchMovie = {id : 1, title: "인셉션"}
    res.status(200).send(`검색한 영화는  
        ID : ${searchMovie.id}, title: ${searchMovie.title}
     입니다.`)
})

//4. 특정 영화 삭제 API - no response 204, with response 200
// 영화의 Id 로 삭제
router.delete("/:deleteMovieId", (req, res) =>{
    res.status(204).send();
})


module.exports= router;