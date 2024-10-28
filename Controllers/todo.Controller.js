import Todo from '../models/todo.Model.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json({ todos });  // Ensure the response is in the expected format
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createTodo = async (req, res) => {
    const { name, description, status } = req.body;
    const newTodo = new Todo({
        name,
        description,
        status,
    });

    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
