const express = require('express')
const router = express.Router()

const user = require('../controllers/user')

router.post('/postuser', user)

module.exports = router