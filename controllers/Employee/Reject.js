const employee = require("../../models/employee")
const reject = async (req, res) => {

    await employee.deleteOne({ _id: req.body.id }).then(result => res.json({ message: "Rejected Request!", result })).catch(err => { console.log(err); res.json({ message: "An error occured!" }) })
}

module.exports = reject
