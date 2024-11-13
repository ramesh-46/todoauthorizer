Todo App CRUD Operations with Postman
Setup in Postman
To test each API endpoint in Postman, ensure you have the backend server running and the correct base URL. In this guide, we assume your API is hosted at http://localhost:5000/api.

Authentication Endpoints
Sign Up (POST /auth/signup)

URL: http://localhost:5000/api/auth/signup
Method: POST
Body: Raw JSON
Example Request Body:
{
  "username": "testUser",
  "email": "testuser@example.com",
  "password": "securePassword123"
}
Expected Response:
{
  "message": "User registered successfully",
  "token": "JWT_TOKEN_HERE"
}
Login (POST /auth/login)

URL: http://localhost:5000/api/auth/login
Method: POST
Body: Raw JSON
Example Request Body:
{
  "email": "testuser@example.com",
  "password": "securePassword123"
}
Expected Response:
{
  "message": "User logged in successfully",
  "token": "JWT_TOKEN_HERE"
}
Note: Copy the JWT token from the response as it will be needed for authorization in the following CRUD operations.

Todo CRUD Operations
For each of the following requests, include an Authorization header with the token you obtained from login:

Authorization Type: Bearer Token
Token: JWT_TOKEN_HERE
1. Create a Todo (POST /todos)
URL: http://localhost:5000/api/todos
Method: POST
Headers:
Authorization: Bearer JWT_TOKEN_HERE
Body: Raw JSON
Example Request Body:
{
  "task": "Complete Todo App documentation",
  "completed": false
}
Expected Response:
{
  "message": "Todo created successfully",
  "todo": {
    "_id": "uniqueTodoId",
    "task": "Complete Todo App documentation",
    "completed": false,
    "userId": "userIdHere",
    "createdAt": "2024-11-13T09:45:00Z"
  }
}
2. Read All Todos (GET /todos)
URL: http://localhost:5000/api/todos
Method: GET
Headers:
Authorization: Bearer JWT_TOKEN_HERE
Expected Response:
{
  "todos": [
    {
      "_id": "uniqueTodoId1",
      "task": "Complete Todo App documentation",
      "completed": false,
      "userId": "userIdHere",
      "createdAt": "2024-11-13T09:45:00Z"
    },
    {
      "_id": "uniqueTodoId2",
      "task": "Study for exams",
      "completed": true,
      "userId": "userIdHere",
      "createdAt": "2024-11-13T10:10:00Z"
    }
  ]
}
3. Update a Todo (PUT /todos/
)
URL: http://localhost:5000/api/todos/:id
Method: PUT
Headers:
Authorization: Bearer JWT_TOKEN_HERE
Body: Raw JSON
Example Request Body:
{
  "task": "Complete Todo App documentation (Updated)",
  "completed": true
}
Expected Response:
{
  "message": "Todo updated successfully",
  "updatedTodo": {
    "_id": "uniqueTodoId",
    "task": "Complete Todo App documentation (Updated)",
    "completed": true,
    "userId": "userIdHere",
    "createdAt": "2024-11-13T09:45:00Z",
    "updatedAt": "2024-11-13T11:00:00Z"
  }
}
4. Delete a Todo (DELETE /todos/
)
URL: http://localhost:5000/api/todos/:id
Method: DELETE
Headers:
Authorization: Bearer JWT_TOKEN_HERE
Expected Response:
{
  "message": "Todo deleted successfully"
}
MongoDB PowerShell Commands
Use MongoDB PowerShell to directly view or manipulate data. Here’s a guide to common operations in MongoDB:

View All Users:

db.users.find().pretty()
View All Todos:

db.todos.find().pretty()
Insert a Fake Todo for Testing:

db.todos.insertOne({
  task: "Sample task",
  completed: false,
  userId: "userIdHere"
})
Delete a Todo by ID:

db.todos.deleteOne({ _id: ObjectId("yourTodoIdHere") })
Update a Todo:

db.todos.updateOne(
  { _id: ObjectId("yourTodoIdHere") },
  { $set: { task: "Updated task", completed: true } }
)
README.md with Postman Guide
# Todo App Project

## Overview
A full-stack Todo application for user authentication and task management. Built using React, Node.js, Express, MongoDB, and JWT for secure user sessions.

## Features
- **User Authentication**: Secure signup and login with JWT-based authentication.
- **Todo Management**: CRUD operations for managing personal todos.
- **Protected Routes**: Only logged-in users can manage their todos.
- **Responsive UI**: Simple, user-friendly interface for task management.

## Technologies
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, JWT
- **Database**: MongoDB

## Getting Started
See installation instructions above.

## Postman API Documentation

### Authentication
1. **Sign Up**: POST /auth/signup
2. **Login**: POST /auth/login

### Todo Operations
1. **Create Todo**: POST /todos
2. **Get All Todos**: GET /todos
3. **Update Todo**: PUT /todos/:id
4. **Delete Todo**: DELETE /todos/:id

## MongoDB Commands
Use these commands in MongoDB Shell to manage data.

## License
MIT
This README file and Postman guide should help document and test your project
