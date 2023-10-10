
const mongoose = require('mongoose')

const stockDetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    dailyData: {
        type: [Object],
        required: true
    },
    hourlyData: {
        type: [Object],
        required: false
    }
})

module.exports = mongoose.model('StocksDetails', stockDetailSchema)