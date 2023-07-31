const express = require("express");
const router = express.Router();

function withoutProperty(obj, property) {
    const { [property]: unused, ...rest } = obj

    return rest
}

router.post("/",(req,res)=> {

    res.status(201).send({
        id: 1,
        title: "제목",
        content: "내용"});
} );


router.get("/",(req,res) =>{
    res.status(200).send([
        {
            id: 1,
            title: '제목',
            content: '내용'
        },
        {
            id: 2,
            title: '제목',
            content: '내용'
        }
    ]);
});

// 특정 게시글 아이디를 찾는다 -> path parameter
router.get("/:boardId",(req,res) =>{
    res.status(200).send({
        id: 1,
        title: '제목',
        content: '내용'
    })
});


router.get("/search", (req, res) => {
    console.log(req.query);
    res.status(200).send({
        id: 1,
        title: '제목',
        content: '내용',
    });
});


router.patch("/:id", (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    const newTitle = req.body["title"];
    const newContent = req.body["content"];

    // DB modify

    res.status(200).send({
        id: req.params.id,
        title: newTitle,
        content: newContent
    })

    // if (req.params.id === req.body["id"]) {
    //     req.body["title"] = newTitle //req.params.title;
    //     req.body["content"] = newContent // req.params.content;
    //     res.status(200).send(req.body);
    // } else res.status(404).send(`There is no post with id: ${req.params.id }.`);
});


// GET /boards/1/comments
//--- Feed back---
// path 에 "/:boardId/comments" 이런 식으로 URI 를 만들지 않고
// comments.js 파일을 만들어서 comments 만 따로 다룰 수 있도록 하는 것을 추천.

router.post("/:boardId/comments", (req,res)=> {
    const { boardId } = req.params;
    const { content } = req.body;

    res.status(201).send({
        id: 1,
        content: 'content',
        boardId
    })
    //
    // if (req.params.id === req.body["id"]){
    //     console.log(`There is a post with id: ${req.params.id}.`)
    //     req.body.postId = req.params.comment;
    //     res.status(201).send(req.body)
    //     res.result()
    // }else res.status(404).send(`There is no post with id: ${req.params.id }.`);

})

router.delete("/:id",(req, res) => {
    res.status(204).send();


    // // delete req.body.postId; //global??
    // console.log(req.body);
    // if (req.params.id === req.body["id"]){
    //     const newBody = withoutProperty(req.body,"postId")
    //     console.log(newBody);
    //     res.status(204).send();
    // }else res.status(404).send(`There is no post with id: ${req.params.id }.`);

});



module.exports = router;