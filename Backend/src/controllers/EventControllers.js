import mongoose from "mongoose";
import Event from '../models/Event.js'

export const getEvents = async (req, res) => {


    try {

        const AllEvents = await Event.find();

        res.status(200).json({ msg: "found All courses", AllEvents })

    }

    catch (error) {
        res.status(500).json(error.message)
    }

}





