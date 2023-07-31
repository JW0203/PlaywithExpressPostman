const express = require("express");
const app = express();
const port = 3000;
const boardsRouter = require("./routes/boards");


// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음

// require('body-parser') 을 하지 않아도
// 최신 버전의 express 에서 아래와 같이 사용 가능.
app.use(express.json());

app.use("/boards", boardsRouter);


app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})

