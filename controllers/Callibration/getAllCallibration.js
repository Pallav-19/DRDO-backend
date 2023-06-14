const callibration = require('../../models/callibration')
const path = require('path')
const fs = require('fs');

const getAllCallibration = async (req, res) => {
    await callibration.find().then((found) => {
        res.json(found)
    }).catch(err => res.json({ message: err.message }))
}
module.exports = getAllCallibration