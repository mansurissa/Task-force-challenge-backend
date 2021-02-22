import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getOneTodo,
  updateTodo
} from '../controllers/todoController';
import checkTodoExistance from '../middlewares/checkTodoExistance';
import { validateTodo } from '../middlewares/todos';

const todoRouter = Router();
todoRouter.route('/').post(validateTodo, createTodo).get(getAllTodos);
todoRouter
  .route('/:id')
  .get(checkTodoExistance, getOneTodo)
  .patch(checkTodoExistance, updateTodo)
  .delete(checkTodoExistance, deleteTodo);

export default todoRouter;
