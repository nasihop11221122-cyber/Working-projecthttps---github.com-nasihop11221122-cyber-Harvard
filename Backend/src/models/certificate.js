import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    stdName: String,

    desc: String,

    code: {
        type: String,
        unique: true
    },

    date: String,

    ceoName: {
        type: String,
        default: 'SYED MUNIB'
    }

})


const certificate = mongoose.model('certificate', certificateSchema);

export default certificate