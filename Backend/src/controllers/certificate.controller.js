import mongoose from 'mongoose'
import certificate from '../models/certificate.js'


export const createCertData = async (req, res) => {
    console.log(req, 'req body data');
    const { stdName, desc, code, date, ceoName } = req.body;
    const existCert = await certificate.findOne({ code });
    if (existCert) {
        res.status(400).json({ msg: 'this certificate is created with this code', success: false })
    }

    const certData = await certificate.create({
        stdName,
        desc,
        code,
        date,
        ceoName
    });

    return res.status(201).json({ msg: 'data created', success: true, certData })
}

export const getAllCertificates = async (req, res) => {
    try {
        const certificates = await certificate.find();
        if (!certificates || certificates.length === 0) {
            res.status(404).json({ msg: 'No certificates found' });
            return;
        }


        res.status(200).json({
            msg: 'Certificates retrieved successfully',
            success: true,
            certificates
        });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
// Certifications logics...
export const getCertificateData = async (req, res) => {

    // console.log(req.query);

    const { code } = req.query;
    // console.log('code', code);
    try {
        const data = await certificate.findOne({ code: { $regex: code, $options: 'i' } });
        if (!data) {
            res.status(404).json({ msg: 'No certificate found with this verification code.' });
            return;
        }

        return res.status(200).json({
            msg: 'Verified Successfully',
            success: true,
            verificationData: data
        })

    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }

}



export const updateCertificateData = async (req, res) => {
    const { id } = req.params;
    const { stdName, desc, code, date } = req.body;

    try {
        const updatedCert = await certificate.findByIdAndUpdate(id, {
            stdName,
            desc,
            code,
            date,
            ceoName: 'SYED MUNIB'   
        }, { new: true });  
        if (!updatedCert) {
            res.status(404).json({ msg: 'Certificate not found' });
            return;
        }   
        return res.status(200).json({ msg: 'Certificate updated successfully', updatedCert });
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



export const deleteCertificateData = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCert = await certificate.findByIdAndDelete(id);
        if (!deletedCert) {
            res.status(404).json({ msg: 'Certificate not found' });
            return;
        }
        return res.status(200).json({ msg: 'Certificate deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }

}