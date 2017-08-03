const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const schedule = require('node-schedule')
const cc = require('cryptocompare')
const server = express()
global.fetch = require('node-fetch')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1', routes)

const rule = new schedule.RecurrenceRule()
rule.minute = 26

schedule.scheduleJob(rule, () => {
  cc.histoHour('BTC', 'USD').then(data => {
  }).catch(console.error).catch((err) => console.log(err))
})

module.exports = server
