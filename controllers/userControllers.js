const express = require("express")
const router = express.Router()
const User = require('../models/userSchema')
const userService = require("../services/userService")


//create user
router.post('/users', async (req, res) => {
    try {
        console.log("Create User")
        let response = await userService.createUser(req.body);
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        console.log("Error while creating User", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


//get all users
router.get('/users', async (req, res) => {
    try {
        let response = await userService.getUsers(req);
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        console.log("Error while listing all User", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

//update user
router.put('/users/:id', async (req, res) => {
    try {
        let response = await userService.updateUser(req);
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        console.log("Error while updating User", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})


//delete user 
router.delete('/users/:id', async (req, res) => {
    try {
        let response = await userService.deleteUser(req);
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        console.log("Error while deleting User", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

//get user by id
router.get('/users/:id', async (req, res) => {
    try {
        let response = await userService.getUserById(req);
        res.status(response.statusCode).send(response.data)
    } catch (error) {
        console.log("Error while listing User", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})



module.exports = router