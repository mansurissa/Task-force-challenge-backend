import { Router } from 'express';
import { signin, register } from '../controllers/userController';
import { validateUser } from '../middlewares/user';

const userRouter = Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     name: Register
 *     summary: Registering users
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               names:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *
 *     responses:
 *       '201':
 *             description: Created User successfully.
 *       '500':
 *             description: There was an error while registering a user.
 * */
userRouter.route('/register').post(validateUser, register);

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     tags:
 *       - Users
 *     name: Signin
 *     summary:
 *     produces:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *             description:  Signed in successfully
 *       '500':
 *             description: There was an error while signing in or incorrect password.
 * */
userRouter.route('/signin').post(signin);

export default userRouter;
