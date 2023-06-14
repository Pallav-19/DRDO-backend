const router = require('express').Router()
const tokenValidator = require("../middlewares/tokenValidator")
const register = require("../controllers/Auth/Signup")
router.post("/register", register)
router.post("/login", require("../controllers/Auth/Login"))
const fetchEmployee = require("../controllers/Employee/FetchEmployee")
router.get("/fetchEmployees", tokenValidator, fetchEmployee)
router.put("/approve", tokenValidator, require("../controllers/Employee/Approve"))
router.delete("/reject", tokenValidator, require("../controllers/Employee/Reject"))
router.get("/fetchUser", tokenValidator, require("../controllers/Employee/getLoggedEmployee"))
router.get("/fetchRequests", tokenValidator, require("../controllers/Employee/getForApproval"))
router.post("/feedback", tokenValidator, require("../controllers/feedback"))

module.exports = router