const tesla = require('tesla-api')

class Tesla {
  constructor() {
    this.unlockDoor = this.unlockDoor.bind(this)

    this.init()
  }

  async init() {
    const vehicles = await tesla.login({
      email: process.env.TESLA_EMAIL,
      password: process.env.TESLA_PASSWORD
    })

    this.vehicle = vehicles[0]
    console.log(this.vehicle)
  }

  unlockDoor() {
    this.vehicle.doorUnlock()
  }
}

module.exports = new Tesla()