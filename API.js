const request = require("request-promise")
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const api = express()

const DEFAULT_DISCORD_WEBHOOK_URL = "https://canary.discordapp.com/api/webhooks/id/token";

api.use(bodyParser.json())

api.post('/discord/webhook', async function (req, res) {
    var body = { content: req.body.message }
  
    if (req.body.username) {
      body['username'] = req.body.username
    }

    request({
      method: 'POST',
      url: DEFAULT_DISCORD_WEBHOOK_URL || req.body.webhookUrl,
      body: body,
      json: true
    }).then(() => { return res.send(200) }).catch(() => res.send)
})

app.use('/api', api)

app.listen(8999)
console.log('Listening on port 8999…')