import mongoose from "mongoose";
import Result from '../models/Result.js'

export const getResults = async (req, res) => {


    try {

        const AllResults = await Result.find();

        res.status(200).json({ msg: "found All results", AllResults })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}





