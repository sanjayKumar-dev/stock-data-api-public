const express = require('express')
const router = express.Router()
const Stocks = require('../Models/stocks')
const StocksDetails = require('../Models/stocksDetails')

router.get('/', async (req, res) => {
    try {
        const stock = await Stocks.find()
        res.json(stock)
    } catch (err) {
        res.send('Error')
    }
})

router.post('/', async (req, res) => {
    const stock = new Stocks({
        time: req.body.time,
        open: req.body.open,
        high: req.body.high,
        low: req.body.low,
        close: req.body.close
    })

    try {
        const stockData = await stock.save()
        res.json(stockData)
    } catch (error) {
        res.send(error)
    }
})
router.get('/search', async (req, res) => {
    try {
        const stock = await StocksDetails.find({
            symbol: req.query.symbol
        })
        const bodyRes = {
            statusCode: 'SUCCESS',
            message: ' Successfully retrieve the data',
            result: req.query.period === '1H' ? stock[0].hourlyData : stock[0].dailyData
        }
        res.json(bodyRes)
    } catch (err) {
        res.send(err)
    }
})




module.exports = router