const express = require('express');
const app = express();
const port = 3000;

app.get('/users', function (req, res) {
    res.send('사용자 정보 조회');
});

app.post('/users', function (req, res) {
    res.send('사용자 생성');
});

app.post('/users/sign-in', function (req, res) {
    res.send('사용자 로그인');
});

app.put('/users', function (req, res) {
    res.send('사용자 정보 수정');
});

app.delete('/users', function (req, res) {
    res.send('사용자 삭제');
});

app.get('/posts', function (req, res) {
    res.send('게시글 조회');
});

app.post('/posts', function (req, res) {
    res.send('게시글 생성');
});

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})