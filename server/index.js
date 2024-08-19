const express = require('express')
const app = express()
const cors = require("cors")
const dbConnection = require('./config/db')
require('dotenv').config();

const PORT = process.env.PORT || 3000
dbConnection();
app.listen(PORT , () => {
    console.log("Server Started On" , PORT)
})