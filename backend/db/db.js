const mongoose = require("mongoose");

const DB = "mongodb+srv://shiv:shiv123@cluster0.kstg7.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err))