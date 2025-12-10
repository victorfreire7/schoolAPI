import { Router } from "express";
import controller from '../controllers/Aluno';
const router = new Router();

router.get('/', controller.index);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.get('/:id', controller.show);
router.delete('/:id', controller.delete);

export default router;
