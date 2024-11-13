import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';  // Import the authMiddleware
import { 
    getTodos, 
    createTodo, 
    updateTodoStatus, 
    deleteTodo, 
    getUserProfile, 
    updateUserProfile, 
    deleteUserProfile,
    getTodoById  // Import the new function to get a todo by ID
} from '../controllers/todoController.js';  // Import controller functions

const router = express.Router();

// Define routes for Todo actions (with auth middleware to secure them)
router.get('/todos', authMiddleware, getTodos);  // Get all todos
router.post('/todos', authMiddleware, createTodo);  // Create a new todo
router.put('/todos/:id', authMiddleware, updateTodoStatus);  // Update a todo's status
router.delete('/todos/:id', authMiddleware, deleteTodo);  // Delete a todo

// Define a route to get a single todo by its ID
router.get('/todos/:id', authMiddleware, getTodoById);  // Get todo by ID

// Define routes for User profile actions (also protected by JWT)
router.get('/user/profile', authMiddleware, getUserProfile);  // Get user profile
router.put('/user/profile', authMiddleware, updateUserProfile);  // Update user profile
router.delete('/user/profile', authMiddleware, deleteUserProfile);  // Delete user profile

// Export the routes to be used in the server
export default router;
