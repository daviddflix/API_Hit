const express = require('express')
const router = express.Router()

const getAllCompras = require('../controllers/getAllCompras')

router.get('/getallcompras', getAllCompras)

module.exports = router