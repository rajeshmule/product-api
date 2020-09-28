const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: String,
    prise: Number,
    brand: String,
  },
  {timestamps: true},
)

module.exports = mongoose.model('Product', productSchema)
