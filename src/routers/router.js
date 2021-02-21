import { Router } from 'express';
import todosRouter from './todosRouter';

const router = Router();
router.use('/todos', todosRouter);
export default router;
