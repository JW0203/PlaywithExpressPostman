const express = require('express');
const app = express();
const port = 3010;

// parsing : 구문 분석, json 과 같은 데이터를 분석해서 javaScript
// 에서 사용가능하도록 compile 해주는 것?
app.use(express.json()) //for parsing application/json

app.get('/', (req, res)=>{
    res.status(200).send({
        type: "Test Post"
    });
})

// add data to body using PostMan
app.post('/users', (req,res)=>
{
    console.log(req.body);
    res.json(req.body);
})

app.listen(port,()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})
