import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['not_completed', 'completed'],
        default: 'not_completed',
    },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
