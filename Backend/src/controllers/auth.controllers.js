import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export const Signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    console.log(req.body);

    try {
        // Check karo total kitne users hain database mein
        const userCount = await User.countDocuments();

        if (userCount >= 1) {
            return res.status(403).json({
                msg: 'Registration closed. An account already exists in this system.',
                success: false
            });
        }

        const existUser = await User.findOne({ email: email });

        if (existUser) {
            return res.status(401).json({ msg: 'This user already exists', success: false })
        }

        // hashing password...
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPass,
        })

        //granting cookies...
        const token = jwt.sign(
            { id: newUser._id },
            process.env.TOKEN_KEY,
            { expiresIn: "7d" }
        );

        res.cookie('userTokens', token, {
           httpOnly: true,
           secure: true,
           sameSite: 'none',
        })

        return res.status(201).json({
            msg: 'Account created Successfully',
            success: true,
            newUser: newUser
        })

    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}


export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({ email: email });

        // validations...
        if (!existUser) {
            return res.status(401).json({ msg: 'user not found', success: false, login: false })
        }

        const passCompare = await bcrypt.compare(password, existUser?.password)

        if (!passCompare) {
            return res.status(401).json({ msg: 'wrong credentials', success: false, login: false })
        }

        //granting cookies...
        const token = jwt.sign(
            { id: existUser._id },
            process.env.TOKEN_KEY,
            { expiresIn: "7d" }   //token expires...
        );
        res.cookie('userTokens', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        })

        //response...
        return res.status(200).json({ msg: 'login granted', success: true, login: true });

    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}



export const UserInfo = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log(currentUser, 'currentUserinfo');

        return res.status(200).json({
            msg: 'user found',
            user: currentUser,
        })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

export const Logout = async (req, res) => {
    console.log(req.cookies?.userTokens);
    try {
        res.clearCookie('userTokens',
            {
                httpOnly: true,
                secure: false,
            }
        )

        return res.status(200).json({ msg: 'logged out successfully', success: true })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

