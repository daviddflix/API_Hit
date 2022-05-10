const express = require('express')
const router = express.Router()

const getUser = require('../controllers/getUser')

router.get('/getuser', getUser)

module.exports = router