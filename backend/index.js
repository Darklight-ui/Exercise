const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT || 5500
const app = express()

app.use(cors())
app.use(express.json())

// connecting your mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection
connection.once('open',() =>{
    console.log('MongoDB is running')
})

// Require the files in the routes
// when a request is made to the exercise it return everything in the exerciseRouter
const exercisesRouter = require('./models/routes/exercises')
const usersRouter = require('./models/routes/users')

// use the files in the routes
// when a request is made to the user it return everything in the userRouter
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)
 
app.listen(PORT, ()=>{
    console.log("server running");
})