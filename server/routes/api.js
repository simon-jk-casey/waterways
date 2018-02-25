const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/v1', (req, res) => {
  res.json('API v1 ENDPOINT OPERATIONAL')
})

module.exports = router
