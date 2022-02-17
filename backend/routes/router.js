const express = require('express') //import express
const router = express.Router() //create express router

// router.get('/', (req, res) => {
//     res.send('connect')
// })

router.post("/register", (req, res) => {
    console.log(req.body);
})

module.exports = router;