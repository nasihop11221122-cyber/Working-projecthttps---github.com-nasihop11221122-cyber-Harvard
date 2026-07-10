import RoleRoadmap from "../models/RoleRoadmap.js";

export const createRoleRoadmap = async (req, res) => {
  try {
    // Frontend se array aayega
    let allPhases = req.body;

    // Pehle phase se title aur description nikalo
    let roadmapTitle = allPhases[0].roadmapTitle;
    let roadmapDesc = allPhases[0].roadmapDesc;

    // Database mein save karo
    let newRoadmap = await RoleRoadmap.create({
      roadmapTitle: roadmapTitle,
      roadmapDesc: roadmapDesc,
      phases: allPhases,
    });

    return res.status(201).json({
      success: true,
      data: newRoadmap,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const getRoleRoadmaps = async (req, res) => {
    try {
        const data = await RoleRoadmap.find();
        return res.json({ RoleRoadMap: data, success: true });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
};