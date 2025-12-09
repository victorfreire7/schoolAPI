import { Router } from 'express';
import controller from '../controllers/User'
const router = new Router();

router.get('/', controller.index);
router.post('/', controller.store);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
