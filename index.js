require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('<h1>Home page</h1>');
});

app.listen(process.env.PORT, ()=> {
    console.log(`listening to port ${process.env.PORT}`)
})
