const express = require("express")
const colors = require("colors")
const connectDB = require("./config/db_config")
const path = require("path")
require('dotenv').config()

const app = express()
const _dirname = path.resolve();

const PORT = process.env.PORT || 5000

// DB Connection
connectDB()

// body-parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// default route
app.get("/" ,(req , res) => {
    res.json({
        msg : "WELLCOME TO CRUD API 1.0"
    })
})

// Todo Routes
app.use('/api/todo' , require('./routes/todoRoutes'))

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(req,res) => {
    res.sendFile(path.resolve(_dirname, "frontend","dist","index.html"))
})

app.listen(PORT , () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.white)
})
