const routes = require('express').Router()

const tesla = require('../lib/tesla')

routes.put('/unlock', (req, res) => {
  const response = tesla.unlockDoor()

  if (response.success) {
    res.send(response)
  } else {
    res.status(400)
    res.send(response)
  }
})

module.exports = routes