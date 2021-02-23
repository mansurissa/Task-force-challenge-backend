import { Router } from 'express';
import checkToken from '../middlewares/checkToken';
import todosRouter from './todosRouter';
import userRouter from './userRouter';

const router = Router();
router.use('/todos', checkToken, todosRouter);
router.use('/users', userRouter);
export default router;
