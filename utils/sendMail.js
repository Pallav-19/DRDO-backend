const nodemailer = require('nodemailer')
require("dotenv").config()

const sendEmail = async (data) => {

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    const message = {
        from: data?.emailAddress,
        to: 'bhanu.akiri2001@gmail.com',
        subject: data?.subject,
        text: data?.text,

    }
    return new Promise((resolve, reject) => {
        return transporter.sendMail(message, (error, info) => {
            if (error) reject(error)
            else resolve(info)
        })
    })

}
module.exports = sendEmail