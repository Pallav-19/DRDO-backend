const callibration = require('../../models/callibration')

const deleteCallibration = async (req, res) => {

    callibration.deleteMany({ _id: { $in: req.body.id } }).then(response => {
        
        res.json({ message: "Callibration(s) deleted successfully!", result: response })
    }).catch(err => res.json({ message: "Callibration deleting failed!" }))
}
module.exports = deleteCallibration