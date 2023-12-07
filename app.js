const express = require("express")
const constants = require("./constants/default")
const routes = require("./controllers/userControllers")
const mongoose = require("mongoose")
const db = require("./database/connection")
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())
const PORT = constants.PORT
app.use('/', routes)

console.log(db)

app.listen(PORT, (error) => {
    if (error) {
        throw new Error(error)
    }
    console.log("Server Listening On Port " + PORT)
})