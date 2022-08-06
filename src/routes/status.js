const express = require('express')
const router = express.Router()

const storeStatus = require('../controllers/storeStatus')

router.post('/storeStatus', storeStatus)

module.exports = router