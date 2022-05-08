const express = require('express')
const router = express.Router()

const compras = require('../controllers/compras')

router.post('/postcompras', compras)

module.exports = router