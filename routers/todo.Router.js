import express from 'express';
const router = express.Router();
import { getTodos, updateTodo, createTodo, deleteTodo } from '../Controllers/todo.Controller.js';

router.get('/', getTodos);
router.post('/create', createTodo); 
router.put('/:id/update', updateTodo);
router.delete('/:id/delete', deleteTodo);

export default router;
