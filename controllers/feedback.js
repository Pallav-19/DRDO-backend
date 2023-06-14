const employee = require("../models/employee")
const sendEmail = require("../utils/sendMail")

const feedback = async (req, res) => {
    const u = await employee.findById(req.user.userId)
    if (!req.body.text || !req.body.subject) return res.status(400).json({ message: "Contents Missing" })
    await sendEmail({ emailAddress: u?.email, text: req.body.text, subject: req.body.subject }).then(r => res.json({ message: "Feedback Received!" })).catch(err => res.json({ message: "Internal error occured!" }))

}
module.exports = feedback