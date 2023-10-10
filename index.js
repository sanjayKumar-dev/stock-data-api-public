const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express()

const uri = ""
mongoose.connect(uri)
const con = mongoose.connection

con.on('open', function(){
    console.log('connected ....');
})

app.use(cors())
app.use(express.json())

const alienRouter = require('./routes/stockData')
app.use('/api', alienRouter)

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})
