import { Router } from 'express';
import tokeneController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokeneController.store);

export default router;
