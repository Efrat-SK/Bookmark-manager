const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5500

app.use(cors())

const BmItemRoute = require('./routes/bmItems')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://bm123:bm123@bookmarking.wkseave.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("Database connected"))
.catch(err=>console.log('database not connected', err))



app.use('/', BmItemRoute)

app.listen(PORT, ()=>console.log("Server connected") )