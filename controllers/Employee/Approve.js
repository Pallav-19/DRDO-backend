const employee = require("../../models/employee")
const approve = async (req, res) => {
    const role = req.body.role === "Admin" ? "Admin" : req.body.role
    await employee.findByIdAndUpdate(req.body.id, { approved: true, role, isAdmin: req.body.role === "Admin" }, { new: true }).then(result => res.json({ message: "Assigned role and approoved employee successfully!", result })).catch(err => res.json({ message: "An error occurred!" }))
}
module.exports = approve