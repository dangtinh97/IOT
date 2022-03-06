const express = require('express')
const router = express.Router()
const {webhook} = require('./webhook')
router.get(['/facebook', '/instagram'],webhook)

module.exports = router