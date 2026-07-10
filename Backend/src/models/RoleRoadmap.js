import mongoose from "mongoose";

// Step Schema
const stepSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  subtopics: [{ type: String }],
});

// Phase Schema — ek phase ka data
const phaseSchema = new mongoose.Schema({
  phase: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: String, required: true },
  color: { type: String },
  bg: { type: String },
  border: { type: String },
  accent: { type: String },
  icon: { type: String },
  steps: [stepSchema],
});

// Main Roadmap Schema
const roadmapSchema = new mongoose.Schema({
  roadmapTitle: { type: String, required: true },
  roadmapDesc: { type: String },
  phases: [phaseSchema],  // ← sare phases yahan array mein
});

const RoleRoadmap = mongoose.model("RoleRoadmaps", roadmapSchema, "RoleRoadmaps");

export default RoleRoadmap;