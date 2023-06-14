const employee = require("../../models/employee")

const getUser = async (req, res) => {
    await employee.findById(req.user.userId).select('-password').then(result => res.json({ message: "Employees fetched succecssfully!", result })).catch(err => res.jsom({ message: "error fetching employee!" }))

}
module.exports = getUser