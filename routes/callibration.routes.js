const fileUplaod = require('../middlewares/fileUplaod')
const tokenValidator = require('../middlewares/tokenValidator')

const router = require('express').Router()

router.post("/addCallibration", tokenValidator, fileUplaod, require("../controllers/Callibration/addCallibration"))
router.get("/getCallibration/:id", tokenValidator, require("../controllers/Callibration/getCallibration"))
router.get("/getAllCallibration", tokenValidator, require("../controllers/Callibration/getAllCallibration"))
router.delete("/deleteCallibration", tokenValidator, require("../controllers/Callibration/deleteCallibration"))
router.get("/downloadCallibration/:id", require("../controllers/Callibration/downloadCallibration"))
module.exports = router