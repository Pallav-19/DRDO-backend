const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI,).then(res => console.log('connected to db')).catch(err => console.log(err))
}
module.exports = connectDB