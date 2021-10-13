const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Car = new Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    SKU: { type: String, required: true },
    price: { type: Number, required: true },
    isSold: Boolean
  }
)

module.exports = mongoose.model('cars', Car)
