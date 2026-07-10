
import Project from "../models/project.model.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// // Helper: upload one local file to Cloudinary, delete it, return { url, publicId }
const uploadToCloudinary = async (filePath, folder = "projects") => {
  const result = await cloudinary.uploader.upload(filePath, { folder });
  fs.unlinkSync(filePath);
  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};


// // const uploadToCloudinary = (buffer, folder = "projects") =>
// //     new Promise((resolve, reject) => {
// //         const stream = cloudinary.uploader.upload_stream(
// //             { folder },
// //             (error, result) => {
// //                 if (error) return reject(error);
// //                 resolve({ url: result.secure_url, publicId: result.public_id });
// //             }
// //         );
// //         stream.end(buffer);
// //     });

// /**
//  * Delete an asset from Cloudinary by publicId (silent — never throws).
//  */
// const deleteFromCloudinary = async (publicId) => {
//   if (!publicId) return;
//   try {
//     await cloudinary.uploader.destroy(publicId);
//   } catch (_) {
//     /* non-fatal */
//   }
// };










// const uploadToCloudinary = (buffer, folder = "projects") =>
//   new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder },
//       (error, result) => {
//         if (error) return reject(error);
//         resolve({ url: result.secure_url, publicId: result.public_id });
//       }
//     );
//     stream.end(buffer);
//   });

/**
 * Delete an asset from Cloudinary by publicId (silent — never throws).
 */
const deleteFromCloudinary = async (publicId) => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (_) {
    /* non-fatal */
  }
};





export const addProject = async (req, res) => {
  try {
    // ── Upload thumbnail (single) ────────────────────────────────────────
    let thumbnailData = null;
    if (req.files?.image?.[0]) {
      thumbnailData = await uploadToCloudinary(req.files.image[0].path);
    }


    // ── Upload screenshots (multiple) ────────────────────────────────────
    let screenshotsData = [];
    if (req.files?.screenshots?.length) {
      screenshotsData = await Promise.all(
        req.files.screenshots.map((file) => uploadToCloudinary(file.path))
      );
    }





    // ── Create project ───────────────────────────────────────────────────
    const newProject = await Project.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      href: req.body.href,
      Features: JSON.parse(req.body.Features || "[]"),
      thumbnail: thumbnailData,
      screenshots: screenshotsData,
    });

    return res.status(201).json({
      success: true,
      message: "Project saved successfully",
      data: newProject,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error saving project",
      error: error.message,
    });
  }
};





// GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      success: true,
      data: projects,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching projects",
    });
  }
};





// Get project by ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching project",
      error: error.message,
    });
  }
};



// // UPDATE project
// export const updateProject = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updated = await Project.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true }
//     );

//     res.json({
//       success: true,
//       message: "Project updated",
//       data: updated,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Update failed",
//       error: error.message,
//     });
//   }
// };





export const updateProject = async (req, res) => {
  try {
    const { id } = req.params; // MongoDB _id

    /* ── find existing doc ── */
    const existing = await Project.findById(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    const { name, description, category, href, Features } = req.body;

    /* ── thumbnail ── */
    let thumbnail = existing.thumbnail; // keep old by default

    const newThumbFile = req.files?.image?.[0];
    if (newThumbFile?.path) {
      await deleteFromCloudinary(existing.thumbnail?.publicId);
      thumbnail = await uploadToCloudinary(newThumbFile.path);
    }

    /* ── screenshots ── */
    /*
     * Strategy:
     *  - req.body.existingScreenshots  → JSON array of { url, publicId }
     *    that the client wants to KEEP.
     *  - req.files.screenshots         → new files to ADD.
     *
     * Any screenshot in existing.screenshots that is NOT in
     * existingScreenshots is deleted from Cloudinary.
     */
    let keptScreenshots = [];
    if (req.body.existingScreenshots) {
      try {
        keptScreenshots = JSON.parse(req.body.existingScreenshots);
      } catch (_) {
        keptScreenshots = [];
      }
    }

    /* delete removed screenshots from Cloudinary
       Match by publicId if available, fallback to url for old records with no publicId */
    const keptPublicIds = new Set(keptScreenshots.map((s) => s.publicId).filter(Boolean));
    const keptUrls = new Set(keptScreenshots.map((s) => s.url).filter(Boolean));

    for (const ss of (existing.screenshots ?? [])) {
      const isKeptById = ss.publicId && keptPublicIds.has(ss.publicId);
      const isKeptByUrl = ss.url && keptUrls.has(ss.url);
      if (!isKeptById && !isKeptByUrl) {
        if (ss.publicId) await deleteFromCloudinary(ss.publicId);
      }
    }

    /* upload new screenshots */
    const newScreenshots = [];
    if (req.files?.screenshots?.length) {
      for (const file of req.files.screenshots) {
        if (file?.path) {
          const result = await uploadToCloudinary(file.path);
          newScreenshots.push(result);
        }
      }
    }

    const screenshots = [...keptScreenshots, ...newScreenshots];

    /* ── save ── */
    const updated = await Project.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        href,
        thumbnail,
        screenshots,
        Features: Features ? JSON.parse(Features) : existing.Features,
      },
      { new: true }
    );

    res.json({ success: true, message: "Project updated", data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update failed", error: error.message });
  }
};



// DELETE project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await Project.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Project deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: error.message,
    });
  }
};