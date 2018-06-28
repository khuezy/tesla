const routes = require('express').Router()

const Tesla = require('../lib/tesla')

routes.put('/door', async (req, res) => {
  const {state} = req.body

  const car = await Tesla.getVehicle()
  switch (state) {
    case 'lock':
      car.doorLock()
      break
    case 'unlock':
      car.doorUnlock()
      break
    default:
      console.log('Default')
  }

  res.send({success: true, message: 'ok'})

})

routes.put('/port', async (req, res) => {
  const {state} = req.body

  const car = await Tesla.getVehicle()
  switch (state) {
    case 'lock':
      car.doorLock()
      break
    case 'unlock':
      car.chargePortDoorOpen()
      break
    default:
      console.log('Default')
  }

  res.send({success: true, message: 'ok'})

})
module.exports = routes