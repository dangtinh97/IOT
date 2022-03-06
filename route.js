const express = require('express')
const router = express.Router()
const {webhook} = require('./webhook')
router.get("/webhooks",webhook)

module.exports = router