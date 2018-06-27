require('dotenv').config()

const app = require('express')()
const bodyParse = require('body-parser')

const jsonParser = bodyParse.json()

const routes = require('./src/routes/tesla')

app.use('/api', jsonParser, routes)

app.listen(9999, () => {
  console.log('Listening on 9999...')
})