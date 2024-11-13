// authRoutes.js
import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/signup', signup);

// Login a user
router.post('/login', login);

export default router;
