const mongoose = require('mongoose')
require('dotenv').config();

const dbConnection = () => {
    mongoose.connect(process.env.DBURL)
    .then(() => {
        console.log("Database Connected Successfully")
    })
    .catch(error => {
        console.log("Error in connection is" , error)
    })
    }


module.exports = dbConnection
