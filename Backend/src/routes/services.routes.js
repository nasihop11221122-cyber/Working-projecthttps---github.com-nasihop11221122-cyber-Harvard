import express from 'express';
import {
    createService,
    getService,
    updateService,
    deleteService,
    getSubService
} from '../controllers/service.controller.js';
import upload from '../middlewares/multer.js';  // ← upload.any()

const router = express.Router();

// uploadAny handles: thumbnail + subImage_0_0 + subImage_0_1 + ... (any field)
router.post('/services', upload.any(), createService);
router.get('/services', getService); 
router.get('/services/getSubService/:subServiceId/:serviceId', getSubService);
router.put('/services/:id', upload.any(), updateService);
router.delete('/services/:id', deleteService);

export default router;