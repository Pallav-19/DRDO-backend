const employee = require("../../models/employee")

const fetchEmployee = async (req, res) => {
   await employee.find({ approved: true }).select('-password -approved -isAdmin').then(result => res.json({ message: "Employees fetched succecssfully!", result })).catch(err => res.jsom({ message: "error fetching employees!" }))

}
module.exports = fetchEmployee