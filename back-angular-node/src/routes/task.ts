import { Router } from 'express';
import { getTasks, newTask, upTask, delTask } from '../controllers/task';
import validateToken from './validate-token';

const router = Router();

router.post('/',validateToken, getTasks);
router.post('/newTask',validateToken, newTask);
router.post('/upTask',validateToken, upTask);
router.delete('/delTask',validateToken, delTask);


export default router;