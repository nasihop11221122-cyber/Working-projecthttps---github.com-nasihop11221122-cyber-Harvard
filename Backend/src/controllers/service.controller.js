import Service from '../models/Service.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';
import mongoose from 'mongoose';

// ─── Helper: upload one local file to Cloudinary then delete it ───────────────
const uploadToCloud = async (localPath) => {
    if (!localPath) throw new Error("Invalid file path");

    const result = await cloudinary.uploader.upload(localPath);

    fs.unlink(localPath, (err) => {
        if (err) console.log("unlink error:", err.message);
    });

    return result.secure_url;
};
// ─── Helper: build a lookup map from multer files array ──────────────────────
// req.files (from upload.any()) is an array like:
// [
//   { fieldname: 'thumbnail',     path: '...' },
//   { fieldname: 'subImage_0_0',  path: '...' },
//   { fieldname: 'subImage_0_1',  path: '...' },
//   { fieldname: 'subImage_1_0',  path: '...' },
// ]
// This turns it into:  { thumbnail: fileObj, subImage_0_0: fileObj, ... }
const buildFileMap = (files = []) => {
    return files.reduce((map, file) => {
        map[file.fieldname] = file;
        return map;
    }, {});
};


// ═══════════════════════════════════════════════════════════════════════════
// CREATE SERVICE  →  POST /services
// ═══════════════════════════════════════════════════════════════════════════

export const createService = async (req, res) => {
    const { id, title, subCategories: subCatJSON } = req.body;

    try {

        // ── 1. Check for duplicate ──────────────────────────────────────────
        const exists = await Service.findOne({ id });
        if (exists) {
            return res.status(400).json({
                msg: 'A service with this ID already exists.',
                success: false
            });
        }

        // ── 2. Build file map from multer ───────────────────────────────────
        const fileMap = buildFileMap(req.files);

        // ── 3. Upload thumbnail ─────────────────────────────────────────────
        let thumbnailUrl = '';
        if (fileMap['thumbnail']) {
            thumbnailUrl = await uploadToCloud(fileMap['thumbnail'].path);
        }

        // ── 4. Parse subCategories JSON sent from frontend ──────────────────
        let subCategories = [];
        if (subCatJSON) {
            subCategories = JSON.parse(subCatJSON);
        }

        // ── 5. Upload each subCategory image and inject the URL ─────────────
        // Frontend sends files as:  subImage_0_0, subImage_0_1, subImage_1_0 …
        for (let subIdx = 0; subIdx < subCategories.length; subIdx++) {
            const imageUrls = [];

            for (let imgIdx = 0; imgIdx < subCategories[subIdx].images.length; imgIdx++) {
                const key = `subImage_${subIdx}_${imgIdx}`;

                if (fileMap[key]) {
                    // New file uploaded → push Cloudinary URL
                    const url = await uploadToCloud(fileMap[key].path);
                    imageUrls.push(url);
                } else {
                    // No file for this slot → keep whatever string was sent (empty or existing URL)
                    imageUrls.push(subCategories[subIdx].images[imgIdx] || '');
                }
            }

            subCategories[subIdx].images = imageUrls;
        }

        // ── 6. Save to DB ───────────────────────────────────────────────────
        const newService = await Service.create({
            id,
            title,
            thumbnail: thumbnailUrl,
            subCategories
        });

        return res.status(201).json({
            msg: 'Service created successfully',
            success: true,
            service: newService
        });

    } catch (error) {
        console.error("SERVICE CREATE ERROR:");
        console.error(error);
        console.error(error.stack);

        return res.status(500).json({
            success: false,
            msg: error.message,
        });
    }
};


// ═══════════════════════════════════════════════════════════════════════════
// GET ALL SERVICES  →  GET /services
// ═══════════════════════════════════════════════════════════════════════════

export const getService = async (req, res) => {
    try {
        const allServices = await Service.find().sort({ id: 1 });

        res.status(200).json({
            msg: 'Found all services',
            success: true,
            AllServices: allServices,

        });

    } catch (error) {
        res.status(500).json({ msg: error.message, success: false });
    }
};








export const getSubService = async (req, res) => {
    try {
        const { subServiceId, serviceId } = req.params;

        if (!subServiceId) {
            return res.status(400).json({ msg: 'Sub Service ID is required', success: false });
        }





        const service = await Service.findOne({ _id: serviceId });
        console.log(subServiceId, service)
        if (!service) {
            return res.status(404).json({ msg: 'Service not found', success: false });
        }


        const SubService = service?.subCategories?.find((subService) => {

            if (subService._id.toString() === subServiceId.toString()) {
                return subService;
            }
        })


        if (!SubService) {
            return res.status(404).json({ msg: 'Sub Service not found', success: false });
        }
        let serviceObj = service.toObject()
        delete serviceObj.subCategories

        res.status(200).json({
            msg: 'Sub Service found successfully',
            success: true,
            subService: SubService,
            service: serviceObj
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message, success: false });
    }
};


// ═══════════════════════════════════════════════════════════════════════════
// UPDATE SERVICE  →  PUT /services/:id
// ═══════════════════════════════════════════════════════════════════════════

export const updateService = async (req, res) => {
    const { id } = req.params;          // MongoDB _id
    const { title, subCategories: subCatJSON } = req.body;

    try {

        // ── 1. Build file map ───────────────────────────────────────────────
        const fileMap = buildFileMap(req.files);

        // ── 2. Upload new thumbnail if provided, else keep existing ─────────
        const existing = await Service.findById(id);
        if (!existing) {
            return res.status(404).json({ msg: 'Service not found', success: false });
        }

        let thumbnailUrl = existing.thumbnail;      // keep old URL by default
        if (fileMap['thumbnail']) {
            thumbnailUrl = await uploadToCloud(fileMap['thumbnail'].path);
        }

        // ── 3. Parse subCategories JSON ─────────────────────────────────────
        let subCategories = existing.subCategories; // keep old data by default
        if (subCatJSON) {
            subCategories = JSON.parse(subCatJSON);
        }

        // ── 4. Upload new subCategory images, keep existing URLs otherwise ───
        for (let subIdx = 0; subIdx < subCategories.length; subIdx++) {
            const imageUrls = [];

            for (let imgIdx = 0; imgIdx < subCategories[subIdx].images.length; imgIdx++) {
                const key = `subImage_${subIdx}_${imgIdx}`;

                if (fileMap[key]) {
                    // New file → upload and use new URL
                    const url = await uploadToCloud(fileMap[key].path);
                    imageUrls.push(url);
                } else {
                    // No new file → keep whatever the frontend sent (existing URL or empty)
                    imageUrls.push(subCategories[subIdx].images[imgIdx] || '');
                }
            }

            subCategories[subIdx].images = imageUrls;
        }

        // ── 5. Save updates ─────────────────────────────────────────────────
        const updated = await Service.findByIdAndUpdate(
            id,
            { title, thumbnail: thumbnailUrl, subCategories },
            { new: true }
        );

        return res.status(200).json({
            msg: 'Service updated successfully',
            success: true,
            service: updated
        });

    } catch (error) {
        res.status(500).json({ msg: error.message, success: false });
    }
};


// ═══════════════════════════════════════════════════════════════════════════
// DELETE SERVICE  →  DELETE /services/:id
// ═══════════════════════════════════════════════════════════════════════════

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Service.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ msg: 'Service not found', success: false });
        }

        res.status(200).json({ msg: 'Service deleted successfully', success: true });

    } catch (error) {
        res.status(500).json({ msg: error.message, success: false });
    }
};
