# User Management Node.js Application

This repository contains code for a Node.js application built with Express.js to manage users using RESTful APIs. The application uses MongoDB as its database to store user information.

## Installation

1. Clone the repository:
```git clone https://github.com/your-username/user-management-node-express-mongodb.git```

2. Navigate to the project directory:
```cd user-management-node-express-mongodb```

3. Install dependencies:
```npm install```

4. Set up MongoDB:
Ensure MongoDB is installed and running locally or specify the connection URI in the constants/default.js file.

5. Start the server:
```node app.js```

## Usage
Once the server is running, you can use the following API endpoints to manage users:

1. **GET /users:** Retrieve all users
2. **GET /users/:id:** Retrieve a user by ID
3. **POST /users:** Create a new user
4. **PUT /users/:id:** Update a user by ID
5. **DELETE /users/:id:** Delete a user by ID

## Postman Collection
