import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    tag: {
        type: String,
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
    },

    media: [
        {
            type: String
        }
    ],
},
    { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;