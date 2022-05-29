const express = require('express')
const router = express.Router()

const sendNotification = require('../controllers/sendNotification')

router.post('/sendNotification', sendNotification)

module.exports = router