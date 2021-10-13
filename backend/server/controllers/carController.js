const Car = require('../models/car')
const Record = require('../models/record')

createInventory = (req, res) => {
  let body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a body to create a new inventory',
    })
  }

  body.isSold = false

  const car = new Car(body)

  if (!car) {
    return res.status(400).json({ success: false, message: 'Create failed' })
  }

  car
    .save()
    .then((data) => {
      return res.status(201).json({
        success: true,
        data
      })
    })
    .catch(error => {
      return res.status(404).json({
        error,
      })
    })
}

updateInventory = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a body to update inventory',
    })
  }

  Car.findOne({ _id: body._id }, (err, car) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Update failed',
      })
    }

    car.overwrite(body)

    car
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
        })
      })
  })
}

deleteInventory = async (req, res) => {
  await Car.findOneAndDelete({ _id: req.params.id })
  .then(async (car) => {
    await Record.deleteMany({ car: car._id})
    .then(() => {
      return res.status(200).json({ 
        success: true, 
      })
    })
    return res.status(400).json({ 
      success: false, 
    })
  }).catch(err => {
    return res.status(404).json({
      err,
    })
  })
}

getCars = async (req, res) => {
  await Car.find({})
  .then((cars) => {
    if (!cars.length) {
      return res
        .status(200)
        .json({ success: false, data: null })
    }
    return res.status(200).json({ success: true, data: cars })
  }).catch(err => console.log(err))
}

module.exports = {
  createInventory,
  updateInventory,
  deleteInventory,
  getCars,
}