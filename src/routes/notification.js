const express = require('express')
const router = express.Router()

const notification = require('../controllers/notification')

router.post('/postnotification', notification)

module.exports = router