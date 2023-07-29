const express = require("express");
const app = express();
const port = 3000;
const boardsRouter = require("./routes/boards");
// const methodOverride = require("method-override");
const bodyParser = require('body-parser');
//
//
// // https://www.zerocho.com/category/NodeJS/post/579b3fc4062e76a002648af6
// app.use(methodOverride()); // PUT, DELETE를 지원 안 하는 클라이언트를 위해
app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음
// app.use(bodyParser.urlencoded({ extended: true })); // qs모듈로 쿼리스트링 파싱


app.use("/boards", boardsRouter);


app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})

