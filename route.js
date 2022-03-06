const express = require('express')
const router = express.Router()
const {webhook} = require('./webhook')
router.get("/webhook",webhook)

module.exports = router