const express = require('express')
const router = express.Router()

const {store, getStatusStore} = require('../controllers/storeStatus')

router.post('/storeStatus', store)
router.get('/getStatus', getStatusStore)

module.exports = router