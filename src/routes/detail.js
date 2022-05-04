const express = require('express')
const router = express.Router()

const details = require('../controllers/detail')

router.get('/detail/:id', details)

module.exports = router
