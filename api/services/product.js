const Product = require('../models/product')

module.exports = {
  createProduct: async (serviceData) => {
    console.log('productservices')
    try {
      let product = new Product({...serviceData})
      let result = await product.save()
      return result.toObject()
    } catch (error) {
      console.log('somthing went worng in create product')
      throw new Error(error)
    }
  },
}
