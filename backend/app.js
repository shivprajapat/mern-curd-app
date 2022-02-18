const express = require('express') //import express
const app = express() //create express app
const DB = require('./db/db') //import db
const port = process.env.PORT || 8003 //set port
const cors = require('cors') //import cors
const router = require('./routes/router') //import router

app.use(cors()) //use cors
app.use(express.json()) //use json

app.use(router)

app.listen(port, () => {
    console.log(`server is start port number http://localhost:${port}`);
});