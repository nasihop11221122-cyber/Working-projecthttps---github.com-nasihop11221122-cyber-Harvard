import express from "express";
import { addProject, deleteProject, getProjectById, getProjects, updateProject } from "../controllers/projects.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();


const projectFiles = upload.fields([
    { name: "image", maxCount: 1 },   // thumbnail
    { name: "screenshots", maxCount: 20 },   // multiple screenshots
]);

// router.post("/add", upload.single("image"), addProject);
router.post(
    "/add",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "screenshots", maxCount: 20 },
    ]),
    addProject
);

router.get("/", getProjects);




router.get("/:id", getProjectById);



router.put("/update/:id", upload.fields([
    { name: "image", maxCount: 1 },   // thumbnail
    { name: "screenshots", maxCount: 20 },   // multiple screenshots
]), updateProject);


router.delete("/delete/:id", deleteProject);

export default router;