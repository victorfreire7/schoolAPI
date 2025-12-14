import { Router } from "express";
import controller from '../controllers/Photo';

const router = new Router();

router.post('/', controller.store); 

export default router;
