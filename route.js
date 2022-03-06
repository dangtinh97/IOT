const express = require('express')
const router = express.Router()
const {webhook, facebook} = require('./webhook')
router.get('/facebook',webhook)
router.post("/facebook",facebook)
module.exports = router