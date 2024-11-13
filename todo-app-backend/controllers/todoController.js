import Todo from '../models/Todo.js';  // Fixed import with .js extension

// Get all todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId }); // Get todos by user
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get todo by ID
export const getTodoById = async (req, res) => {
    const { id } = req.params;  // Get the ID from the request parameters

    try {
        // Find the todo by ID and check if it belongs to the user
        const todo = await Todo.findOne({ _id: id, userId: req.userId });

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found or does not belong to the user' });
        }

        res.json(todo);  // Return the todo data
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new todo
export const createTodo = async (req, res) => {
    const { title } = req.body;

    const newTodo = new Todo({
        userId: req.userId,  // Attach user ID to each todo
        title,
        status: 'pending', // Default status
    });

    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update todo status
export const updateTodoStatus = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a todo
export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get user profile (Placeholder for User profile)
export const getUserProfile = (req, res) => {
    res.json({ message: 'User profile fetched successfully' });
};

// Update user profile (Placeholder for updating User profile)
export const updateUserProfile = (req, res) => {
    res.json({ message: 'User profile updated successfully' });
};

// Delete user profile (Placeholder for deleting User profile)
export const deleteUserProfile = (req, res) => {
    res.json({ message: 'User profile deleted successfully' });
};
