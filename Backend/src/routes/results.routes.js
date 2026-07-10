import express from 'express'
import { Router } from 'express'
import { getResults } from '../controllers/resultControllers.js';

const router = express.Router();

router.get('/results', getResults,)


export default router