const express = require("express");
const app = express();
const port = 3000;


const userRouter =  require("./routes/users");
const postRouter = require("./routes/posts");

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(port, () =>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});