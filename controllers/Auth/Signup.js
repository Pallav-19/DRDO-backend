const employee = require('../../models/employee')

const register = async (req, res) => {
    employee.create(req.body).then(data => {
        res.json({ message: "Successfully Registered! wait for approval!", result: data })
    }).catch(err => res.json({ message: "Error occurred" }))
}

module.exports = register