const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/binFiles");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLocaleLowerCase().split(" ").join("-");
        cb(null, name + "-" + Date.now() + ".txt");
    }
});
module.exports = multer({ storage: storage }).single("binFile");