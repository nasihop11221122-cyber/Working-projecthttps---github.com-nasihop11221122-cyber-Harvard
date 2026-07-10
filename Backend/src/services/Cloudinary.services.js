import cloudinary from "../config/cloudinary.js";
import fs from 'fs'




export const uploadToCloudinary = async (filePath) => {
  console.log(filePath)
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "courses",
  });
  console.log(result)
fs.unlink(filePath, (err) => {
      if (err) console.log("File delete error:", err.message);
    });
  return { url: result.secure_url, publicId: result.public_id };
};

export const deleteFromCloudinary = async (publicId) => {
  return cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
  });
};
