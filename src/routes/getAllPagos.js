const express = require('express')
const router = express.Router()

const getAllPagos = require('../controllers/getAllPagos')

router.get('/getallpagos', getAllPagos)

module.exports = router