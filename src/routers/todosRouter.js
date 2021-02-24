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

/**
 * @swagger
 * /api/todos:
 *   post:
 *     tags:
 *       - Todos
 *     name: Register
 *     summary: Registering Todos
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         description: Token you get after signin
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               priority:
 *                 type: string
 *     responses:
 *       '201':
 *             description: Created todo successfully.
 *       '401':
 *             description: Unauthorized.
 *       '500':
 *             description: There was an error while registering a todo.
 * */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     tags:
 *       - Todos
 *     name: Get all
 *     summary: Getting all todos
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         description: Token you get after signin
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *             description:  Todos fetched successfully.
 *       '401':
 *             description: Unauthorized.
 *       '500':
 *             description: There was an error while getting all todos.
 * */
todoRouter.route('/').post(validateTodo, createTodo).get(getAllTodos);

/**
 * @swagger
 * /api/todos:
 *   get:
 *     tags:
 *       - Todos
 *     name: Get all
 *     summary: Getting all todos
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         description: Token you get after signin
 *         required: true
 *         type: string
 *       - name: id
 *         in: header
 *         description: the id of todo
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *             description:  Todo item fetched successfully.
 *       '401':
 *             description: Unauthorized.
 *       '500':
 *             description: There was an error while getting  todo item.
 * */

/**
 * @swagger
 * /api/todos:
 *   patch:
 *     tags:
 *       - Todos
 *     name: update
 *     summary: updating Todos
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         description: Token you get after signin
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               priority:
 *                 type: string
 *     responses:
 *       '201':
 *             description: Created todo successfully.
 *       '401':
 *             description: Unauthorized.
 *       '500':
 *             description: There was an error while updating a todo.
 * */

/**
 * @swagger
 * /api/todos:
 *   delete:
 *     tags:
 *       - Todos
 *     name: delete
 *     summary: deleting all todos
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         description: Token you get after signin
 *         required: true
 *         type: string
 *       - name: id
 *         in: header
 *         description: the id of todo
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *             description:  Todo item deleted successfully.
 *       '401':
 *             description: Unauthorized.
 *       '500':
 *             description: There was an error while deleting  todo item.
 * */
todoRouter
  .route('/:id')
  .get(checkTodoExistance, getOneTodo)
  .patch(checkTodoExistance, updateTodo)
  .delete(checkTodoExistance, deleteTodo);

export default todoRouter;
