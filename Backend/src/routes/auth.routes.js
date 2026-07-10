import express from 'express';
import { Signup, Login, UserInfo, Logout } from '../controllers/auth.controllers.js';
import { googleLogin, googleSignup } from '../controllers/googleAuth.controller.js';
import { checkToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// ── Email / Password ─────────────────────────────────────────────────────────
router.post('/auth/signup', Signup);
router.post('/auth/login', Login);
router.post('/auth/logout', Logout);
router.get('/auth/getMe', checkToken, UserInfo);

// ── Google OAuth ─────────────────────────────────────────────────────────────
router.post('/auth/google/login', googleLogin);
router.post('/auth/google/signup', googleSignup);

export default router;