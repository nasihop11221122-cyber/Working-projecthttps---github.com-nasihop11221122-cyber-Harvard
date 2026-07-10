import express from 'express'
import { getCareers } from '../controllers/careerControllers.js';

const router = express.Router();

router.get('/careers', getCareers,);


export default router