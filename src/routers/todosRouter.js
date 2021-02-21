import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getOneTodo,
  updateTodo
} from '../controllers/todoController';
import { validateTodo } from '../middlewares/todos';

const todoRouter = Router();
todoRouter.route('/').post(validateTodo, createTodo).get(getAllTodos);
todoRouter.route('/:id').delete(deleteTodo).get(getOneTodo).patch(updateTodo);

export default todoRouter;
