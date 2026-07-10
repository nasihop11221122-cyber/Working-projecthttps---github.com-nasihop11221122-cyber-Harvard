// import mongoose from "mongoose";

// const courseSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },

//     category: {
//         type: String,
//         required: true
//     },

//     level: {
//         type: String,
//         required: true
//     },

//     duration: {
//         type: String,
//         required: true
//     },

//     students: {
//         type: Number,
//         default: 0
//     },

//     rating: {
//         type: Number,
//         default: 0
//     },

//     price: {
//         type: String,
//         required: true
//     },

//     image: {
//         type: String
//     },

//     desc: {
//         type: String
//     },

//     tags: [
//         {
//             type: String
//         }
//     ]

// }, { timestamps: true });

// const Course = mongoose.model("Course", courseSchema);

// export default Course;