const express = require('express')
const router = express.Router()

const pagos = require('../controllers/pagos')

router.post('/pagos', pagos)

module.exports = router