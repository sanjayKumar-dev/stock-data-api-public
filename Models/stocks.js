const mongoose = require('mongoose')

const stocksSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    open: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Stocks', stocksSchema)