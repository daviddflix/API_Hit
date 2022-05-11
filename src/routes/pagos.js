const express = require('express')
const router = express.Router()

const pagos = require('../controllers/pagos')

router.get('/payment', pagos)

module.exports = router