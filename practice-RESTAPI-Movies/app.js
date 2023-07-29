const express = require("express");
const app = express();
const port = 3000;

const moviesRouter = require("./routes/movies");

app.use("/movies", moviesRouter );


app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})