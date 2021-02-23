import { Router } from 'express';
import { signin, register } from '../controllers/userController';
import { validateUser } from '../middlewares/user';

const userRouter = Router();
userRouter.route('/register').post(validateUser, register);
userRouter.route('/signin').post(signin);

export default userRouter;
