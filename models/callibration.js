const mongoose = require('mongoose')

const callibrationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    binFile: {
        type: String,
        required: true,

    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee'
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee'
    },
    filename: String

},
    {
        timestamps: true,

    }
)
module.exports = mongoose.model('Callibration', callibrationSchema)