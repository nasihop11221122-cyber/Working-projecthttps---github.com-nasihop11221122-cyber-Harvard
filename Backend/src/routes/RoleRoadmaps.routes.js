import express from "express";
import { createRoleRoadmap } from "../controllers/RoleroadmapsControllers.js";
import { getRoleRoadmaps } from "../controllers/RoleroadmapsControllers.js";
const RoleRMP = express.Router();

RoleRMP.post("/Rolebaseroadmaps", createRoleRoadmap);
RoleRMP.get("/Rolebaseroadmaps", getRoleRoadmaps)

export default RoleRMP;


