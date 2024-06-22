import express from 'express';
import { getToDoList, createToDoList, updateToDoList, deleteToDoList } from '../controllers/todoController.mjs'; 

const router = express.Router();

router.get('/getTodo', getToDoList);
router.post('/createTodo', createToDoList);
router.put('/updateTodo/:id', updateToDoList);
router.delete('/deleteTodo/:id', deleteToDoList);

export default router;
