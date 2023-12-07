const mongoose = require("mongoose")
const Users = require("../models/userSchema")
const constants = require("../constants/default")



let uri = constants.MONGO_URL + constants.DBNAME

mongoose.connect(uri,{ useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Database Connected Successfully")
})
