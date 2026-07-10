import mongoose from "mongoose";
import Career from "../models/Career.js";

export const getCareers = async (req, res) => {

    try {

        const AllCareers = await Career.find();

        res.status(200).json({ msg: "Got All careers", AllCareers })
    }

    catch (error) {
        res.status(500).json(error.message)
    }

}


