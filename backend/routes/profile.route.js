const express = require('express')
const getData = require('../controllers/profile.controller')
const router = express.Router()

router.get('/:username',getData)

module.exports = router