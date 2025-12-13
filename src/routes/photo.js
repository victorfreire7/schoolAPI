import { Router } from "express";
import multer from 'multer';

import controller from '../controllers/Photo';
import config from '../config/multer';

const upload = multer(config);

const router = new Router();

router.post('/', upload.single('photo'), controller.store); // sendo 'photo' o nome do arquivo que está sendo enviado.

export default router;
