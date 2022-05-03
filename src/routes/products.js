const express = require('express')
const router = express.Router()

const products = require('../controllers/products')

router.get('/product', products)

module.exports = router
