const express = require('express');
const app = express();
const port = 3010;

app.use(express.json()) //for parsing application/json

app.get('/', (req, res)=>{
    res.status(200).send({
        type: "Test PostMan"
    });
})

app.get('/users/1', (req, res)=>{
    let userName = req.body["name"]
    let userEmail = req.body["email"]
    res.status(200).send(`User name is ${userName}, 
    User's email is ${userEmail}`);
    // res.status(200).send(req.body);
    console.log(req.body)
})


app.listen(port,()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})

