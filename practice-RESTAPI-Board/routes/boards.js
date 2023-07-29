const express = require("express");
const router = express.Router();

function withoutProperty(obj, property) {
    const { [property]: unused, ...rest } = obj

    return rest
}

router.post("/",(req,res)=>{
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

router.get("/search", (req, res) => {
    console.log(req.query);
    res.status(200).send({
        id: 1,
        title: '제목',
        content: '내용',
    });
});


router.patch("/:id/:title/:content", (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    if (req.params.id === req.body["id"]) {
        req.body["title"] = req.params.title;
        req.body["content"] = req.params.content;
        res.status(200).send(req.body);
    }else res.status(404).send(`There is no post with id: ${req.params.id }.`);
});

router.post("/:id/comments/:comment", (req,res)=>{
    if (req.params.id === req.body["id"]){
        console.log(`There is a post with id: ${req.params.id}.`)
        req.body.postId = req.params.comment;
        res.status(201).send(req.body)
        res.result()
    }else res.status(404).send(`There is no post with id: ${req.params.id }.`);

})

router.delete("/:id",(req, res) => {
    // delete req.body.postId; //global??
    console.log(req.body);
    if (req.params.id === req.body["id"]){
        const newBody = withoutProperty(req.body,"postId")
        console.log(newBody);
        res.status(204).send();
    }else res.status(404).send(`There is no post with id: ${req.params.id }.`);

});



module.exports = router;