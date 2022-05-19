const express = require('express')
const router = express.Router()

const getUser = require('../controllers/getUser')

router.get('/getuser/:id', getUser)

module.exports = router