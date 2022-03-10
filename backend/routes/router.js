const express = require('express') //import express
const router = express.Router() //create express router
const users = require('../modules/userSchema') //import userSchema

// router.get('/', (req, res) => {
//     res.send('connect')
// })


/**
* @register post api
**/
router.post("/register", async (req, res) => {

    const { name, email, age, mobile, work, add, desc } = req.body;
    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(422).json('please fill all the fields');
    }
    try {
        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(422).json('users already exist');
        } else {
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

/**
* @get api
**/

router.get('/getdata', async (req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

/**
* @get individual api
**/

router.get('/getuser/:id', async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const individual = await users.findById({ _id: id })
        console.log(individual);
        res.status(201).json(individual)
    } catch (error) {
        res.status(422).json(error);
    }
})

/**
* @update user data
**/

router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        })

        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router;