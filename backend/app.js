require('dotenv').config()

const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const connectedToMongo = require("./db")
const cors = require("cors")
const userRoutes = require("./routes/user")
const adminRoutes = require('./routes/admin')
const enquiryRoutes = require('./routes/enquiry')
const cookieParser = require('cookie-parser')
const path = require('path')

connectedToMongo();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173', // your React app's origin
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get('/api',(req,res)=>{
    res.send('hello world')
})

app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/enquiry', enquiryRoutes)


app.listen(port, () => console.log(`Server Connected at port ${port}`))