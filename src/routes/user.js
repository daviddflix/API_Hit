const express = require('express')
const router = express.Router()

const {createUser} = require('../controllers/user')
const {getUserById} = require('../controllers/user')
const {getAllUsers} = require('../controllers/user')

router.post('/createUser', createUser)
router.get('/getUserById/:id', getUserById)
router.get('/getAllUsers', getAllUsers)

module.exports = router