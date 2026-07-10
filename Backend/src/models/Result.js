import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    tags: [{
        type: String,
    }],

    category: {
        type: String,
        required: true
    },

    class: {
        type: String,
    },

    date: {
        type: Date,
    },

    images: [
        {
            type: String
        }
    ],

    videos: [
        {
            type: String
        }
    ]
},
    { timestamps: true }
);

const Result = mongoose.model("Result", ResultSchema);

export default Result;