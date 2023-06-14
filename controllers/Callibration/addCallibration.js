const callibration = require('../../models/callibration')

const addCallibration = async (req, res) => {
    const url = req.protocol + "://" + req.get("host");

    if (!req.file) return res.status(400).json({ message: "File missing!" })
    
    await callibration.create({
        filename: req?.file?.filename,
        binFile: url + "/binFiles/" + req?.file?.filename,
        createdBy: req.user.userId,
        updatedBy: req.user.userId,

    }).then((data) => {
        res.status(200).json({ message: "callibration file uploaded!", result: data })
    }).catch(err => {
        res.json({ message: "An error occured!" })
    })

}
module.exports = addCallibration