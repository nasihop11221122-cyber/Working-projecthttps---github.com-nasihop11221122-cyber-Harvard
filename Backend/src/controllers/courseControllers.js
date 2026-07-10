import mongoose from "mongoose"
import Course from '../models/Course.js'
import cloudinary from '../config/cloudinary.js'
import fs from 'fs'
import { uploadToCloudinary } from "../services/Cloudinary.services.js";


// export const createCourse = async (req, res) => {
//     const { title, category, level, duration, students, rating, price, desc, tags } = req.body
//     // console.log(req.file);
//     // const image = req.file.filename;
//     const imagePath = req.file.path;
//     //  console.log(imagePath, 'multer path');

//     try {
//         let onlineImageUrl;

//         if (imagePath) {
//             const cloudResp = await cloudinary.uploader.upload(imagePath);
//             onlineImageUrl = cloudResp.secure_url;
//             // console.log(onlineImageUrl, 'cloudinary image url');

//             // delete local pic from uploads dir...
//             fs.unlinkSync(imagePath);
//         }



//         const existCourse = await Course.findOne({ title: title });
//         if (existCourse) {
//             res.status(400).json({ msg: 'this course already created once', success: false })
//         }

//         const newCourse = await Course.create({
//             title,
//             category,
//             level,
//             duration,
//             students,
//             rating,
//             price,
//             desc,
//             tags,
//             image: onlineImageUrl
//         })

//         return res.status(201).json({ msg: "course created successfully", newCourse, success: true })
//     }
//     catch (error) {
//         res.status(500).json({ msg: error.message })
//     }

// }

export const createCourse = async (req, res) => {
    try {
        const {
            slug,
            category,
            featured,
            title,
            subtitle,
            description,
            level,
            duration,
            students,
            about,
            whyEnroll,
            whatYouLearn,  // arrives as JSON string from FormData
            curriculum,    // arrives as JSON string from FormData
        } = req.body;

        // ── Parse JSON strings sent from frontend FormData ──────────────────
        const parsedWhatYouLearn = JSON.parse(whatYouLearn || '[]');
        const parsedCurriculum = JSON.parse(curriculum || '[]');

        // ── Upload thumbnail (single) ────────────────────────────────────────
        let thumbnailData = null;
        if (req.files?.thumbnail?.[0]) {
            thumbnailData = await uploadToCloudinary(req.files.thumbnail[0].path);
        }

        // ── Upload other images (multiple) ───────────────────────────────────
        let imagesData = [];
        if (req.files?.images?.length) {
            imagesData = await Promise.all(
                req.files.images.map((file) => uploadToCloudinary(file.path))
            );
        }

        // ── Check duplicate slug ─────────────────────────────────────────────
        const existingCourse = await Course.findOne({ slug });
        if (existingCourse) {
            return res.status(400).json({ msg: 'A course with this slug already exists', success: false });
        }

        // ── Create course ────────────────────────────────────────────────────
        const newCourse = await Course.create({
            slug,
            category,
            featured: featured === 'true' || featured === true,
            title,
            subtitle,
            description,
            level,
            duration,
            students: Number(students) || 0,
            about,
            whyEnroll,
            whatYouLearn: parsedWhatYouLearn,
            curriculum: parsedCurriculum,
            thumbnail: thumbnailData,
            images: imagesData,
        });

        return res.status(201).json({ msg: 'Course created successfully', newCourse, success: true });

    } catch (error) {
        return res.status(500).json({ msg: error.message, success: false });
    }
};




export const getCourses = async (req, res) => {

    try {

        const AllCourses = await Course.find();
        // console.log(AllCourses, 'all courses');

        res.status(200).json({
            AllCourses: AllCourses,
            msg: "courses found",
        })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}

export const getSpecificCourse = async (req, res) => {
    const { id } = req.params;

    try {

        const getCourse = await Course.findById(id);
        // console.log(AllCourses, 'all courses');

        res.status(200).json({
            msg: "course found",
            course: getCourse
        })

    }

    catch (error) {
        res.status(500).json(error.message)
    }
}

export const getCourseTitle = async (req, res) => {
    try {
        const courseTitles = await Course.find().select("_id title").lean();
        return res.status(200).json({
            success: true,
            courseTitles
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message, success: false })
    }
}


export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, category, level, duration, students, rating, price, desc, tags } = req.body
    console.log(req.file);

    try {
        let onlineImageUrl;
        if (req.file) {
            let imagePath = req.file.path;
            // console.log(imagePath);

            const cloudResp = await cloudinary.uploader.upload(imagePath);
            onlineImageUrl = cloudResp.secure_url;

            // delete image from local dir...
            fs.unlinkSync(imagePath)
        }

        const updateData = {
            title,
            category,
            level,
            duration,
            students,
            rating,
            price,
            desc,
            tags
        };

        // only update image if it is new...
        if (onlineImageUrl) {
            updateData.image = onlineImageUrl;
        }

        const updateCourse = await Course.findByIdAndUpdate(id, updateData, { new: true })


        if (!updateCourse) {
            return res.status(404).json({ msg: 'Course not found', success: false });
        }

        res.status(200).json({ msg: 'Course updated successfully', updateCourse, success: true });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await Course.findByIdAndDelete(id)
        return res.status(200).json({ msg: 'course deleted', success: true })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}




