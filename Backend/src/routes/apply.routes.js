import express from 'express'
import { Router } from 'express'
import { createApply, deleteApply, getApply, updateApplyStatus } from '../controllers/applyControllers.js';

const router = express.Router();

router.post('/apply', createApply);
router.get('/apply', getApply);
router.delete('/apply/:id', deleteApply);
router.put('/apply/status/:id', updateApplyStatus);  //updating status of apply...

export default router