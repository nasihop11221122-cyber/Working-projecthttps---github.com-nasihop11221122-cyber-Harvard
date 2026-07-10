import express from 'express'
import { Router } from 'express'
import { getEvents } from '../controllers/EventControllers.js';

const router = express.Router();


router.get('/getevents', getEvents)

export default router