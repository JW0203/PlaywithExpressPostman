const express = require("express");
const app = express();
const port = 3000;
const boardsRouter = require("./routes/boards");
// const methodOverride = require("method-override");
const bodyParser = require('body-parser');
//
app.use(bodyParser.json()); // body의 데이터를 json형식으로 받음



app.use("/boards", boardsRouter);


app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})

