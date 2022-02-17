const express = require('express') //import express
const router = express.Router() //create express router
const users = require('../modules/userSchema') //import userSchema

// router.get('/', (req, res) => {
//     res.send('connect')
// })

router.post("/register", async (req, res) => {

    const { name, email, age, mobile, work, add, desc } = req.body;
    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(404).json('please fill all the fields');
    }
    try {
        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(404).json('users already exist');
        } else {
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;