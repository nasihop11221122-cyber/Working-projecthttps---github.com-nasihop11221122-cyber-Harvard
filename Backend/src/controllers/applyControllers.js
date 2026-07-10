import mongoose from "mongoose";
import Apply from '../models/Apply.js'
import sendEmail from '../services/sendEmail.js'




export const createApply = async (req, res) => {
    const { firstName, lastName, email, address, phone, course } = req.body;
    // console.log(req.body);

    try {

        const existApply = await Apply.findOne({ email, course });

        if (!firstName || !lastName || !email || !address || !phone || !course) {
            res.status(401).json({ msg: 'Please fill all required fields', success: false })
        }

        if (existApply) {
            res.status(400).json({ msg: 'You have already applied to this course', success: false })
        }

        const newApply = await Apply.create({
            firstName,
            lastName,
            email,
            address,
            phone,
            course,
        })

    //     // Sending email to the applier...
    //     const emailTemplate = `
    //   <div style="font-family: Arial; padding:20px;">
    //     <h2>Dear ${firstName},</h2>
    //     <p>Thank you Applying for: ${course}</p>
    //     <p>Your application has been received successfully.</p>
        
    //     <h4>Your Details:</h4>
    //     <p><strong>Name:</strong> ${firstName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>

    //     <br/>
    //     <p>We will contact you soon.</p>
    //     <br/>
    //     <p>Best Regards,<br/>SSIB Team</p>
    //   </div>
    // `;


    //     await sendEmail({
    //         to: email,  // dynamic user email
    //         subject: "Application Confirmation",
    //         html: emailTemplate,
    //     });

        return res.status(201).json({
            msg: 'Application submitted successfully check your Email', success: true,
            applyData: newApply
        })

    }
    catch (error) {
        res.status(500).json(error.message)
    }
}


export const getApply = async (req, res) => {
    try {
        const getAllApplies = await Apply.find();
        // console.log(getAllApplies);
        return res.status(200).json({
            msg: 'found all applies',
            success: true,
            applyData: getAllApplies
        })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteApply = async (req, res) => {
    try {

        const { id } = req.params;
        // console.log(id, 'user id');

        await Apply.findByIdAndDelete(id)

        return res.status(200).json({ msg: 'user deleted', success: true })

    }
    catch (error) {
        res.status(500).json(error.message);
    }
}


export const updateApplyStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const apply = await Apply.findByIdAndUpdate(id,
            { status },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            msg: "Status updated successfully",
            applyData: apply
        });
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}
