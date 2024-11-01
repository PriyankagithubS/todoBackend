import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './database/dbConfig.js';
import todoRouter from './routers/todo.Router.js';


dotenv.config();

const app = express();

// Middleware for parsing requests
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all requests

// Default route
app.get('/', (req, res) => {
    res.status(200).json({ message: "App is working fine" });
});

// Connect to MongoDB
connectDb();

// Routes
app.use('/api/todos', todoRouter);


// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
