require('dotenv').config()

const app = require('express')()
const bodyParse = require('body-parser')

const jsonParser = bodyParse.json()

const routes = require('./src/routes/tesla')

process.on('uncaughtException', (a,b,c) => {
  console.log(a,b,c)
})

app.use('/api', jsonParser, routes)

app.listen(3333, () => {
  console.log('Listening on 3333...')
})