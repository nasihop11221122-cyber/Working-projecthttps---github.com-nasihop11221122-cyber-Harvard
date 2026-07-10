


// import express from "express";
// import upload from "../middlewares/multer.js";
// import {
//     createCourse,
//     getCourses,
//     getCourseById,
//     updateCourse,
//     deleteCourse,
//     getCourseImages,
//     uploadCourseImages,
//     deleteCourseImage,
//     getCourseCurriculum,
//     createCourseCurriculum,
//     updateCourseCurriculum,
//     deleteCourseCurriculum,
//     getCourseWhatYouLearn,
//     createCourseWhatYouLearn,
//     updateCourseWhatYouLearn,
//     deleteCourseWhatYouLearn,
// } from "../controllers/courses.controller.js";


import {
    createCourse,
    getCourses,
    getCourseBySlug,
    updateCourse,
    deleteCourse,
    getCourseImages,
    uploadCourseImages,
    deleteCourseImage,
    getCourseCurriculum,
    createCourseCurriculum,
    updateCourseCurriculum,
    deleteCourseCurriculum,
    getCourseWhatYouLearn,
    createCourseWhatYouLearn,
    updateCourseWhatYouLearn,
    deleteCourseWhatYouLearn,
} from "../controllers/courses.controller.js";
import express from "express";
import upload from "../middlewares/multer.js";


const router = express.Router();

// CREATE COURSE
// router.post("/createCourse", upload.single("thumbnail"), createCourse);
router.post(
    '/createCourse',
    upload.fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'images',    maxCount: 10 },
    ]),
    createCourse
);
 


// GET ALL COURSES
router.get("/getCourses", getCourses);

// GET SINGLE COURSE
// router.get("/getCourse/:id", getCourseById);

//GET SINGLE COURSE BY SLUG

router.get("/getCourse/:slug", getCourseBySlug);

// UPDATE COURSE
router.put("/updateCourse/:id", upload.single("thumbnail"), updateCourse);

// DELETE COURSE
router.delete("/deleteCourse/:id", deleteCourse);







router.get("/courses/:courseId/images", getCourseImages);
router.post("/courses/images", upload.array("images", 10), uploadCourseImages);
router.delete("/courses/images", deleteCourseImage);







router.get("/courses/:courseId/curriculum", getCourseCurriculum);
router.post("/courses/curriculum", createCourseCurriculum);
router.put("/courses/curriculum/:curriculumId", updateCourseCurriculum);
router.delete("/courses/curriculum/:curriculumId", deleteCourseCurriculum);











router.get("/courses/:courseId/what-you-learn", getCourseWhatYouLearn);
router.post("/courses/what-you-learn", createCourseWhatYouLearn);
router.put("/courses/what-you-learn/:itemId", updateCourseWhatYouLearn);
router.delete("/courses/what-you-learn/:itemId", deleteCourseWhatYouLearn);


export default router;