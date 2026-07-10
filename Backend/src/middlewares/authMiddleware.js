// import jwt from 'jsonwebtoken'
// import cookieParser from 'cookie-parser'
// import User from '../models/User.js';


// export const checkToken = async (req, res, next) => {
//     const token = req.cookies?.userTokens;
//     // console.log(token, 'token by me ');

//     try {
//         if (!token) {
//             return res.status(401).json({ msg: "Token is not found" });
//         }

//         //Verifying jwt tokens...
//         const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
//         console.log(decodedToken);

//         //Attaching user info...
//         req.user = await User.findById(decodedToken.id).select('-password')
//         console.log(req.user, 'user info');

//         next();

//     }
//     catch (error) {
//         return res.status(500).json(error.message)
//     }
// }




import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const checkToken = async (req, res, next) => {
    const token = req.cookies?.userTokens;

    // ── 1. Token missing ────────────────────────────────────────────────────
    if (!token) {
        return res.status(401).json({
            msg: 'Not authenticated. Please login.',
            success: false,
        });
    }

    try {
        // ── 2. Verify signature and expiry ──────────────────────────────────
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        // decoded = { id: '...', iat: ..., exp: ... }

        // ── 3. Check user still exists in DB ───────────────────────────────
        //    (handles case: user deleted after token was issued)
        const user = await User.findById(decoded.id).select('-password');
        console.log(user, 'user found via middlware');

        if (!user) {
            return res.status(401).json({
                msg: 'Account no longer exists. Please sign up again.',
                success: false,
            });
        }

        // ── 4. Attach user to request and continue ──────────────────────────
        req.user = user;
        next();

    } catch (error) {
        // ── Specific JWT errors — never send 500 for these ──────────────────
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                msg: 'Session expired. Please login again.',
                success: false,
            });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                msg: 'Invalid token. Please login again.',
                success: false,
            });
        }

        // Unexpected error (DB down, etc.)
        return res.status(500).json({ msg: error.message, success: false });
    }
};