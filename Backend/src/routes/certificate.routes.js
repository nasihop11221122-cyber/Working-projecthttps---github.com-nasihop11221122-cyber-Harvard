import express from 'express'
import { getCertificateData, createCertData, updateCertificateData, deleteCertificateData, getAllCertificates } from '../controllers/certificate.controller.js';

const router = express.Router();

router.post('/certificate', createCertData)

router.get('/certificate', getAllCertificates)
router.get('/certificate/:code', getCertificateData)

router.put('/certificate/:id', updateCertificateData)
router.delete('/certificate/:id', deleteCertificateData)

export default router