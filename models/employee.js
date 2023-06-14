const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: Date,
    gender: String,
    approved: { type: Boolean, default: false },
    role: String,
    isAdmin: { type: Boolean, default: false },

})
module.exports = mongoose.model("Employee", employeeSchema)