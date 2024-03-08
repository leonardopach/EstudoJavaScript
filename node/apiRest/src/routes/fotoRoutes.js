import { Router } from 'express';
import fotoController from '../controllers/FotoController';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';
import multer from 'multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);
export default router;
