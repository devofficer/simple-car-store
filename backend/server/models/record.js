const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Record = new Schema(
  {
    buyer: String,
    date: Date,
    car: { type: String, required: true }
  }
)

module.exports = mongoose.model('records', Record)
