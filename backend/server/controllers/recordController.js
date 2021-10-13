const Record = require('../models/record')
const Car = require('../models/car')

addRecord = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a body to create a new record',
    })
  }

  const record = new Record(body)

  if (!record) {
    return res.status(400).json({ success: false, message: 'Creating is failed' })
  }

  record
    .save()
    .then(async (record) => {
      await Car.findOne({ _id: record.car })
        .then(car => {
          car.isSold = true

          car.save()

          return res.status(201).json({
            success: true,
            data: record,
          })
        })
      return res.status(400).json({
        success: false,
        data: record,
      })
    })
    .catch(err => {
      return res.status(400).json({
        error: err
      })
    })
}

updateRecord = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a body to update record',
    })
  }

  Record.findOne({ _id: body._id }, (err, record) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Update failed',
      })
    }

    record.overwrite(body)

    record
      .save()
      .then((data) => {
        return res.status(200).json({
          success: true,
          data
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
        })
      })
  })
}

deleteRecord = async (req, res) => {
  await Record.findOneAndDelete({ _id: req.params.id })
    .then((record) => {
      return res.status(200).json({
        success: true,
      })
    }).catch(err => {
      return res.status(404).json({
        err,
      })
    })
}

getRecords = async (req, res) => {
  await Record.find({})
    .then(async (records) => {
      if (!records.length) {
        return res
          .status(200)
          .json({ success: false, data: null })
      }

      return res.status(200).json({ success: true, data: records })
    }).catch(err => console.log(err))
}

module.exports = {
  addRecord,
  updateRecord,
  deleteRecord,
  getRecords,
}