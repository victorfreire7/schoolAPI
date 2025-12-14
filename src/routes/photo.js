import { Router } from "express";
import controller from '../controllers/Photo';

const router = new Router();

router.post('/', controller.store); // sendo 'photo' o nome do arquivo que está sendo enviado.

export default router;
