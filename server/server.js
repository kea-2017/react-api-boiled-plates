var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var server = express()
var schedule = require('node-schedule')
global.fetch = require('node-fetch')
const cc = require('cryptocompare')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1', routes)

var rule = new schedule.RecurrenceRule()
 rule.minute = 26

schedule.scheduleJob(rule, () => {
  console.log('inside sched job FN')
   cc.histoHour('BTC', 'USD')
     .then(data => {
       console.log(data)
      })
     .catch(console.error)
   .catch((err) => console.log(err))
 })

module.exports = server
