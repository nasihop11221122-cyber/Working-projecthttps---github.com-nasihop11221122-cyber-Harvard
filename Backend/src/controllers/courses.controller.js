import Course from "../models/course.model.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import upload from "../middlewares/multer.js";
import { deleteFromCloudinary, uploadToCloudinary } from "../services/Cloudinary.services.js";

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
    console.log(req.files?.thumbnail?.[0], "The files of backend")
    if (req.files?.thumbnail?.[0]) {
      thumbnailData = await uploadToCloudinary(req.files.thumbnail[0].path, "courses");
      console.log(thumbnailData, "thumbnail data")
    }

    // ── Upload other images (multiple) ───────────────────────────────────
    let imagesData = [];
    if (req.files?.images?.length) {
      imagesData = await Promise.all(
        req.files.images.map((file) => uploadToCloudinary(file.path, "courses"))
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
    console.log(error, "error of course");
    return res.status(500).json({ msg: error.message, success: false });
  }
};











// GET ALL
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching courses",
    });
  }
};

// GET ONE
// export const getCourseById = async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);

//     if (!course) {
//       return res.status(404).json({
//         success: false,
//         message: "Course not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: course,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching course",
//     });
//   }
// };

// UPDATE
export const updateCourse = async (req, res) => {
  try {
    const data = req.body;

    // Parse JSON string fields if sent as FormData
    if (typeof data.whatYouLearn === "string") {
      data.whatYouLearn = JSON.parse(data.whatYouLearn);
    }
    if (typeof data.curriculum === "string") {
      data.curriculum = JSON.parse(data.curriculum);
    }

    if (req.file) {
      // Delete old thumbnail from Cloudinary before uploading new one
      const existing = await Course.findById(req.params.id).select("thumbnail");
      if (existing?.thumbnail?.publicId) {
        await deleteFromCloudinary(existing.thumbnail.publicId);
      }

      data.thumbnail = await uploadToCloudinary(req.file.path, "courses");
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (err) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// DELETE
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Delete thumbnail from Cloudinary
    if (course.thumbnail?.publicId) {
      await deleteFromCloudinary(course.thumbnail.publicId);
    }

    // Delete any extra images from Cloudinary
    if (course.images?.length > 0) {
      await Promise.all(
        course.images.map((img) => deleteFromCloudinary(img.publicId))
      );
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};






































const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({ success: false, message });
};

const validateCourseId = (courseId) => {
  return typeof courseId === "string" && courseId.trim().length > 0;
}; 

export const getCourseImages = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!validateCourseId(courseId)) {
      return sendError(res, 400, "Course id is required.");
    }

    const course = await Course.findById(courseId).select("images");

    if (!course) {
      return sendError(res, 404, "Course not found.");
    }

    return res.status(200).json({
      success: true,
      images: course.images || [],
    });
  } catch (error) {
    return sendError(res, 500, error.message || "Failed to fetch course images.");
  }
};

export const uploadCourseImages = async (req, res) => {
  try {
    const { courseId } = req.body;
    const files = req.files || [];

    if (!validateCourseId(courseId)) {
      return sendError(res, 400, "Course id is required.");
    }

    if (!files.length) {
      return sendError(res, 400, "Please upload at least one image.");
    }

    const course = await Course.findOne({ _id: courseId })

    if (!course) {
      return sendError(res, 404, "Course not found.");
    }

    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const uploaded = await uploadToCloudinary(file.path);
        console.log("^^^^", uploaded, "Th euploaded")
        return {
          url: uploaded.url,
          publicId: uploaded.publicId,
        };
      })
    );


    console.log("&&&&", course, uploadedImages)
    course.images = [...(course.images || []), ...uploadedImages];
    await course.save();

    return res.status(201).json({
      success: true,
      message: "Images uploaded successfully.",
      images: course.otherImage,
    });
  } catch (error) {
    return sendError(res, 500, error.message || "Failed to upload course images.");
  }
};

export const deleteCourseImage = async (req, res) => {
  try {
    const { courseId, publicId } = req.body;

    if (!validateCourseId(courseId)) {
      return sendError(res, 400, "Course id is required.");
    }

    if (!publicId) {
      return sendError(res, 400, "Image public id is required.");
    }

    const course = await Course.findById(courseId).select("images");

    if (!course) {
      return sendError(res, 404, "Course not found.");
    }

    const imageExists = course.images?.some((image) => image.publicId === publicId);

    if (!imageExists) {
      return sendError(res, 404, "Image not found.");
    }

    await deleteFromCloudinary(publicId);

    course.images = course.images.filter((image) => image.publicId !== publicId);
    await course.save();

    return res.status(200).json({
      success: true,
      message: "Image deleted successfully.",
      images: course.images,
    });
  } catch (error) {
    return sendError(res, 500, error.message || "Failed to delete course image.");
  }
};














































const sendErrorCurriculum = (res, statusCode, message) => {
  console.log(message, "The error message")
  return res.status(statusCode).json({ success: false, message });
};

const normalizeTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  return String(tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
};

const getCourseByIdFunction = async (courseId) => {
  if (!courseId) return null;
  return Course.findOne({ _id: courseId });
};

export const getCourseCurriculum = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorCurriculum(res, 404, "Course not found.");
    }

    return res.status(200).json({
      success: true,
      curriculum: course.curriculum || [],
    });
  } catch (error) {
    return sendErrorCurriculum(res, 500, error.message || "Failed to fetch curriculum.");
  }
};

export const createCourseCurriculum = async (req, res) => {
  try {
    const { courseId, title, tags } = req.body;

    if (!title?.trim()) {
      return sendErrorCurriculum(res, 400, "Curriculum title is required.");
    }

    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorCurriculum(res, 404, "Course not found.");
    }

    course.curriculum.push({
      title: title.trim(),
      tags: normalizeTags(tags),
    });

    await course.save();

    return res.status(201).json({
      success: true,
      message: "Curriculum created successfully.",
      curriculum: course.curriculum,
    });
  } catch (error) {
    return sendErrorCurriculum(res, 500, error.message || "Failed to create curriculum.");
  }
};

export const updateCourseCurriculum = async (req, res) => {
  try {
    const { curriculumId } = req.params;
    const { courseId, title, tags } = req.body;

    if (!title?.trim()) {
      return sendErrorCurriculum(res, 400, "Curriculum title is required.");
    }

    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorCurriculum(res, 404, "Course not found.");
    }

    const curriculumItem = course.curriculum.id(curriculumId);

    if (!curriculumItem) {
      return sendErrorCurriculum(res, 404, "Curriculum item not found.");
    }

    curriculumItem.title = title.trim();
    curriculumItem.tags = normalizeTags(tags);

    await course.save();

    return res.status(200).json({
      success: true,
      message: "Curriculum updated successfully.",
      curriculum: course.curriculum,
    });
  } catch (error) {
    return sendErrorCurriculum(res, 500, error.message || "Failed to update curriculum.");
  }
};

export const deleteCourseCurriculum = async (req, res) => {
  try {
    const { curriculumId } = req.params;
    const { courseId } = req.body;
    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorCurriculum(res, 404, "Course not found.");
    }

    const curriculumItem = course.curriculum.id(curriculumId);

    if (!curriculumItem) {
      return sendErrorCurriculum(res, 404, "Curriculum item not found.");
    }

    curriculumItem.deleteOne();
    await course.save();

    return res.status(200).json({
      success: true,
      message: "Curriculum deleted successfully.",
      curriculum: course.curriculum,
    });
  } catch (error) {
    return sendErrorCurriculum(res, 500, error.message || "Failed to delete curriculum.");
  }
};





















































const sendErrorWhatYouLearn = (res, statusCode, message) => {
  return res.status(statusCode).json({ success: false, message });
};

// const getCourseById = async (courseId) => {
//   if (!courseId) return null;
//   return Course.findOne({ _id: courseId });
// };

export const getCourseWhatYouLearn = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorWhatYouLearn(res, 404, "Course not found.");
    }

    return res.status(200).json({
      success: true,
      whatYouLearn: course.whatYouLearn || [],
    });
  } catch (error) {
    return sendErrorWhatYouLearn(res, 500, error.message || "Failed to fetch learning outcomes.");
  }
};

export const createCourseWhatYouLearn = async (req, res) => {
  try {
    const { courseId, title, caption } = req.body;

    if (!title?.trim()) {
      return sendErrorWhatYouLearn(res, 400, "Learning outcome title is required.");
    }

    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorWhatYouLearn(res, 404, "Course not found.");
    }

    course.whatYouLearn.push({
      title: title.trim(),
      caption: caption?.trim() || "",
    });

    await course.save();

    return res.status(201).json({
      success: true,
      message: "Learning outcome created successfully.",
      whatYouLearn: course.whatYouLearn,
    });
  } catch (error) {
    return sendErrorWhatYouLearn(res, 500, error.message || "Failed to create learning outcome.");
  }
};

export const updateCourseWhatYouLearn = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { courseId, title, caption } = req.body;

    if (!title?.trim()) {
      return sendErrorWhatYouLearn(res, 400, "Learning outcome title is required.");
    }

    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorWhatYouLearn(res, 404, "Course not found.");
    }

    const item = course.whatYouLearn.id(itemId);

    if (!item) {
      return sendErrorWhatYouLearn(res, 404, "Learning outcome not found.");
    }

    item.title = title.trim();
    item.caption = caption?.trim() || "";

    await course.save();

    return res.status(200).json({
      success: true,
      message: "Learning outcome updated successfully.",
      whatYouLearn: course.whatYouLearn,
    });
  } catch (error) {
    return sendErrorWhatYouLearn(res, 500, error.message || "Failed to update learning outcome.");
  }
};

export const deleteCourseWhatYouLearn = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { courseId } = req.body;
    const course = await getCourseByIdFunction(courseId);

    if (!course) {
      return sendErrorWhatYouLearn(res, 404, "Course not found.");
    }

    const item = course.whatYouLearn.id(itemId);

    if (!item) {
      return sendErrorWhatYouLearn(res, 404, "Learning outcome not found.");
    }

    item.deleteOne();
    await course.save();

    return res.status(200).json({
      success: true,
      message: "Learning outcome deleted successfully.",
      whatYouLearn: course.whatYouLearn,
    });
  } catch (error) {
    return sendErrorWhatYouLearn(res, 500, error.message || "Failed to delete learning outcome.");
  }
};









export const getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({
      slug: req.params.slug,
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
