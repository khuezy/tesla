const routes = require('express').Router()

const Tesla = require('../lib/tesla')

routes.put('/door', async (req, res) => {
  const {state} = req.body
  try {
    const car = await Tesla.getVehicle()
    switch (state) {
      case 'lock':
        await car.doorLock()
        break
      case 'unlock':
        await car.doorUnlock()
        break
      default:
        console.log('Default')
    }
    res.send({success: true, message: 'ok'})

  } catch(err) {
    console.log(err.status, err.message)
    res.send({success: false, message: err})
  }


})

routes.put('/port', async (req, res) => {
  const {state} = req.body

  const car = await Tesla.getVehicle()
  switch (state) {
    case 'lock':
      await car.doorLock()
      break
    case 'unlock':
      await car.chargePortDoorOpen()
      break
    default:
      console.log('Default')
  }

  res.send({success: true, message: 'ok'})

})
module.exports = routes