const employee = require("../../models/employee")
const jwt = require('jsonwebtoken')
require("dotenv").config()
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const foundUser = await employee.findOne({ email });
        if (!foundUser) return res.status(404).json({ message: "User not found" })
        if (foundUser.approved === false) return res.status(401).json({ message: "You are not yet approoved!" })
        if (foundUser.password !== password) return res.status(400).json({ message: "Incorrect password!" })
        const token = jwt.sign({ userId: foundUser._id, role: foundUser.role, isAdmin: foundUser.isAdmin }, process.env.SECRET)
        res.json({ message: "login successful", token, role: foundUser.role, isAdmin: foundUser.isAdmin })
    }
    catch (err) {
        console.log(err.message);
        res.json({ message: "An error occured" })
    }


}
module.exports = login