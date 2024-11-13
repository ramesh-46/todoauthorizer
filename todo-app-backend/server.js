// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();  // Load environment variables

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Root route with large, centered welcome message
app.get('/', (req, res) => {
    res.send(`
        <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #f0f2f5;">
            <h1 style="font-size: 48px; font-family: Arial, sans-serif; color: #333;">
                Welcome to the Todo App API
            </h1>
        </div>
    `);
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api', todoRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
