import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_ID, 'backend google id');

// ─── Helper: verify Google token and extract payload ─────────────────────────
const verifyGoogleToken = async (googleToken) => {
    const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    return ticket.getPayload();       // { sub, email, name, picture, ... }
};

// ─── Helper: sign JWT and attach cookie ──────────────────────────────────────
const grantToken = (res, userId) => {
    const token = jwt.sign(
        { id: userId },
        process.env.TOKEN_KEY,
        { expiresIn: '7d' }
    );

    res.cookie('userTokens', token, {
        httpOnly: true,
        sameSite: 'lax',
        // secure: true,   ← uncomment in production (HTTPS)
        maxAge: 7 * 24 * 60 * 60 * 1000,   // 7 days in ms
    });
};


// ═══════════════════════════════════════════════════════════════════════════
// GOOGLE LOGIN  →  POST /auth/google/login
// Flow: verify token → user must already exist → grant access
// ═══════════════════════════════════════════════════════════════════════════

export const googleLogin = async (req, res) => {
    try {
        const { googleToken } = req.body;
        if (!googleToken) {
            return res.status(400).json({ msg: 'Google token is required.', success: false });
        }

        // ── 1. Verify with Google ───────────────────────────────────────────
        const { email, sub } = await verifyGoogleToken(googleToken);

        // ── 2. Check if user exists ─────────────────────────────────────────
        const user = await User.findOne({ email });

        if (!user) {
            // No account found → tell frontend to redirect to signup
            return res.status(404).json({
                msg: 'No account found with this Google email. Please sign up first.',
                success: false,
                action: 'signup',       // frontend can use this to redirect
            });
        }

        // ── 3. Account exists but was registered with email/password ─────────
        if (user.provider !== 'google') {
            return res.status(400).json({
                msg: 'This email is registered with email & password. Please use regular login.',
                success: false,
            });
        }

        // ── 4. Everything OK — grant token ──────────────────────────────────
        grantToken(res, user._id);

        return res.status(200).json({
            msg: 'Login successful.',
            success: true,
            login: true,
        });

    } catch (error) {
        res.status(500).json({ msg: error.message, success: false });
    }
};


// ═══════════════════════════════════════════════════════════════════════════
// GOOGLE SIGNUP  →  POST /auth/google/signup
// Flow: verify token → user must NOT exist → create + grant access
// ═══════════════════════════════════════════════════════════════════════════

export const googleSignup = async (req, res) => {
    try {
        const { googleToken } = req.body;
        if (!googleToken) {
            return res.status(400).json({ msg: 'Google token is required.', success: false });
        }

        // ── 0. Block signup if ANY user already exists in DB ───────────────
        const userCount = await User.countDocuments();
        if (userCount > 0) {
            return res.status(403).json({
                msg: 'Registration is closed. An account already exists in the system.',
                success: false,
                action: 'login',
            });
        }

        // ── 1. Verify with Google ───────────────────────────────────────────
        const { sub, email, name, picture } = await verifyGoogleToken(googleToken);

        // ── 2. Check if account already exists (extra safety, redundant now) ─
        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(409).json({
                msg: 'An account with this Google email already exists. Please login instead.',
                success: false,
                action: 'login',
            });
        }

        // ── 3. Create new user ──────────────────────────────────────────────
        const newUser = await User.create({
            fullName: name,
            email,
            googleId: sub,
            avatar: picture,
            provider: 'google',
        });

        // ── 4. Grant token immediately after signup ──────────────────────────
        grantToken(res, newUser._id);

        return res.status(201).json({
            msg: 'Account created successfully.',
            success: true,
            login: true,
        });

    } catch (error) {
        res.status(500).json({ msg: error.message, success: false });
    }
};