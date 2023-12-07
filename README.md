# User Management Node.js Application

This repository contains code for a Node.js application built with Express.js to manage users using RESTful APIs. The application uses MongoDB as its database to store user information.

## Installation

#1. Clone the repository:

```bash
git clone https://github.com/your-username/user-management-node-express-mongodb.git

#2. Navigate to the project directory:
```cd user-management-node-express-mongodb

#3. Install dependencies:
```npm install

#4. Set up MongoDB:
Ensure MongoDB is installed and running locally or specify the connection URI in the constants/default.js file.

#5.Start the server:
node app.js

##Usage
Once the server is running, you can use the following API endpoints to manage users:

GET /users: Retrieve all users
GET /users/:id: Retrieve a user by ID
POST /users: Create a new user
PUT /users/:id: Update a user by ID
DELETE /users/:id: Delete a user by ID

##Postman Collection
undefined/workspace/user-management-node-express-mongodb/collection/15538441-cf7f17aa-3d53-4bf6-88a0-c169ef0615a8?action=share&creator=15538441
