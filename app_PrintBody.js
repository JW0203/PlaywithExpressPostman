const express = require('express');
const app = express();
const port = 3011;

app.use(express.json()) //for parsing application/json

app.get('/', (req, res)=>{
    res.status(200).send({
        type: "Test PostMan"
    });
})

// res can use only one time.
app.get('/users/1', (req, res)=>{
    let userName = req.body["name"]
    let userEmail = req.body["email"]
    res.status(200).send(`User name is ${userName}, 
    User's email is ${userEmail}`);
    console.log(req.header(('qwe')))
    console.log(req.body)
    // res.status(200).send(req.body); // <-- error
})


app.listen(port,()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})

