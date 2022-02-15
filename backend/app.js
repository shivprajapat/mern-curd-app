const express = require('express') //import express

const app = express() //create express app
const DB = require('./db/db') //import db

app.get('/', (req, res) => {
    res.send('Hello World')
})
const port = process.env.PORT || 3000 //set port

app.listen(port, () => {
    console.log(`server is start port number http://localhost:${port}`);
});