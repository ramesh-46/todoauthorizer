// models/Todo.js
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Define Todo schema
const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in progress', 'done', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    uniqueId: { type: String, default: uuidv4 },
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

// Export the model
export default Todo;
