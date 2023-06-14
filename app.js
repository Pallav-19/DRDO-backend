const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/db.config")
const path = require('path')
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/binFiles", express.static(path.join(__dirname, "public/binFiles")));

app.use("/employee", require("./routes/employee.routes"))
app.use("/callibration", require("./routes/callibration.routes"))


const port = process.env.port || 4040
app.listen(port, (err) => {
    if (err) return console.log(err);
    connectDB()
    console.log("connected");
})