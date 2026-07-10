import nodemailer from "nodemailer";


const sendEmail = async ({ to, subject, html }) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });


    const mailOptions = {
        from: `"SSI BANNU" <${process.env.EMAIL_USER}>`,
        to: to,              // dynamic user email
        subject: subject,
        html: html,          // dynamic template
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmail;