const User = require("../models/userSchema")

async function createUser(request) {
    let response = {
        data: {},
        statusCode: 200
    }
    try {
        // validate payloads
        let { first_name, last_name, email, phone } = request
        if (email == "" || first_name == "" || last_name == "" || phone == "") {
            response.data = { error: "Fileds are empty" }
            response.statusCode = 400
            return response
        }
        //check is user alreday present in db
        let checkUser = await User.countDocuments({ 'email': email })
        if (checkUser > 0) {
            response.data = { error: "Document already present" }
            response.statusCode = 409
            return response
        }
        //create a user
        const user = new User({ first_name, last_name, email, phone })
        let result = await user.save()
        if (result) {
            response.data = user
            response.statusCode = 200
            return response
        } else {
            response.data = { error: "user not added" }
            response.statusCode = 500
            return response
        }

    } catch (error) {
        response.statusCode = 500
        response.data = { message: "Internal Server Error" }
        return response
    }

}


async function getUsers(req) {
    let response = {
        data: {},
        statusCode: 200
    }
    try {
        const query = {};
        if (req.query.first_name) {
            query.firstName = { $regex: new RegExp(req.query.first_name, 'i') };
        }
        if (req.query.last_name) {
            query.lastName = { $regex: new RegExp(req.query.last_name, 'i') };
        }
        if (req.query.email) {
            query.email = { $regex: new RegExp(req.query.email, 'i') };
        }
        if (req.query.phone) {
            query.phone = { $regex: new RegExp(req.query.phone, 'i') };
        }

        let users = await User.find(query);
        if (users) {
            response.data = users
            response.statusCode = 200
            return response
        } else {
            response.data = { error: "users not found" }
            response.statusCode = 500
            return response
        }
    } catch (error) {
        response.statusCode = 500
        response.data = { message: "Internal Server Error" }
        return response
    }
}

async function updateUser(request) {
    let id = request.params.id
    let { first_name, last_name, email, phone } = request.body
    let response = {
        data: {},
        statusCode: 200
    }
    try {
        // validate payloads
        if (email == "" || first_name == "" || last_name == "" || phone == "") {
            response.data = { error: "Fileds are empty" }
            response.statusCode = 400
            return response
        }
        //check is user alreday present in db
        let checkUser = await User.countDocuments({ '_id': id })
        if (checkUser == 0) {
            response.data = { error: "User Not Exist" }
            response.statusCode = 409
            return response
        }
        //update user
        let result = await User.findByIdAndUpdate(id, { first_name, last_name, email, phone }, { new: true })
        if (result) {
            response.data = result
            response.statusCode = 200
            return response
        } else {
            response.data = { error: "user not updated" }
            response.statusCode = 500
            return response
        }
    } catch (error) {
        response.statusCode = 500
        response.data = { message: "Internal Server Error" }
        return response
    }

}

async function deleteUser(request) {
    let id = request.params.id
    let response = {
        data: {},
        statusCode: 200
    }
    try {
        //check is user alreday present in db
        let checkUser = await User.countDocuments({ '_id': id })
        if (checkUser == 0) {
            response.data = { error: "User Not Exist" }
            response.statusCode = 409
            return response
        }
        //delete user
        let result = await User.findByIdAndDelete(id)
        if (result) {
            response.data = { message: "User Deleted Successfully" }
            response.statusCode = 200
            return response
        } else {
            response.data = { error: "user not deleted" }
            response.statusCode = 500
            return response
        }
    } catch (error) {
        response.statusCode = 500
        response.data = { message: "Internal Server Error" }
        return response
    }
}

async function getUserById(request) {
    let id = request.params.id
    let response = {
        data: {},
        statusCode: 200
    }
    try {
        //get user by id
        let result = await User.findOne({ "_id": id })
        if (result) {
            response.data = result
            response.statusCode = 200
            return response
        } else {
            response.data = { error: "user not found" }
            response.statusCode = 500
            return response
        }
    } catch (error) {
        response.statusCode = 500
        response.data = { message: "Internal Server Error" }
        return response
    }
}




module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserById
}