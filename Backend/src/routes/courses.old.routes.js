import express from 'express'
import { Router } from 'express'
import { getCourses, createCourse, deleteCourse, updateCourse, getSpecificCourse, getCourseTitle } from '../controllers/courseControllers.js';
import upload from '../middlewares/multer.js'
import { deleteCourseImage, getCourseImages, uploadCourseImages } from '../controllers/courses.controller.js';

const router = express.Router();

// router.post('/courses', upload.single('image'), createCourse);

router.post(
    '/courses',
    upload.fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'images',    maxCount: 10 },
    ]),
    createCourse
);
 



router.get('/courses', getCourses);
router.get('/courses/:id', getSpecificCourse);
router.get('/course-titles', getCourseTitle)
router.delete('/courses/:id', deleteCourse)
router.put('/courses/:id', upload.single('image'), updateCourse)





export default router