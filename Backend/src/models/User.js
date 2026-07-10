import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: { type: String },

    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: false,
        default: null,
    },

    role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
},
    googleId: String,
    avatar: String,

    provider: {
        type: String,
        default: "local"
    },

    // resetPasswordToken: String,
    // resetPasswordExpiry: Date,

    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
},
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema);

export default User