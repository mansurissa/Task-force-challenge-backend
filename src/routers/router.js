import { Router } from 'express';
import todosRouter from './todosRouter';
import userRouter from './userRouter';

const router = Router();
router.use('/todos', todosRouter);
router.use('/users', userRouter);
export default router;
