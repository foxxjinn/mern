/////////////////
/*
    Author: Jinn Foxx, foxxjinn@gmail.com
    NodeJS Express Server
    connects to MonogoDB for database
*/
/////////////////

const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()

// Middleware
app.use(express.json({ extended: false }))

// Homepage
app.get('/', (req, res) => {
    res.send('App Running')
})

// Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`)
})