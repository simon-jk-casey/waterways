const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const api = require('./routes/api')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api', api)

module.exports = server
