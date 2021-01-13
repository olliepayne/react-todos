const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todos')

router.get('/', todoCtrl.index)

module.exports = router