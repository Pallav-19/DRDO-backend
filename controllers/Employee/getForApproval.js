const employee = require("../../models/employee")

const getForApproval = async (req, res) => {
    await employee.find({ approved: false }).select('-password -approved -isAdmin').then(result => res.json({ message: "Employees fetched succecssfully!", result })).catch(err => res.jsom({ message: "error fetching employees!" }))

}
module.exports = getForApproval