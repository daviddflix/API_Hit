const express = require('express')
const router = express.Router()

const getAllCompras = require('../controllers/getAllCompras')

router.get('/getAllCompras', getAllCompras)

module.exports = router