import { Router } from 'express';
import controller from '../controllers/User'
const router = new Router();

router.get('/', controller.index)
router.post('/', controller.store)

export default router;
