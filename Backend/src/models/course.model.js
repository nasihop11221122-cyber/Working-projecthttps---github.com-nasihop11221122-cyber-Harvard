


import mongoose from "mongoose";

// Reusable image schema
const imageSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
        publicId: { type: String, required: true },
    },
    { _id: true }
);

// What you learn
const whatYouLearnSchema = new mongoose.Schema(
    {
        title: { type: String, trim: true },
        caption: { type: String, trim: true },
    },
    { _id: true }
);

// Curriculum
const curriculumSchema = new mongoose.Schema(
    {
        title: { type: String, trim: true },
        tags: [{ type: String, trim: true }]
    },
    { _id: true }
);

const courseSchema = new mongoose.Schema(
    {
        // NOTE: Removed custom `id` field — MongoDB's _id serves as the unique identifier.
        // If you need a human-readable ID (e.g. "course-001"), use the `slug` field instead.

        slug: {
            type: String,
            lowercase: true,
            trim: true,
        },

        category: {
            type: String,
            trim: true,
        },

        featured: {
            type: Boolean,
            default: false,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        subtitle: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        // { url, publicId } — populated by Cloudinary upload
        thumbnail: {
            type: imageSchema,
            required: false,
        },

        images: [imageSchema],

        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
        },

        duration: {
            type: String,
            trim: true,
        },

        students: {
            type: Number,
            default: 0,
        },

        about: {
            type: String,
            trim: true,
        },

        whatYouLearn: [whatYouLearnSchema],

        curriculum: [curriculumSchema],

        whyEnroll: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Course", courseSchema); 