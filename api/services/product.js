const Product = require('../models/product')

module.exports = {
  createProduct: async (serviceData) => {
    console.log('productservices')
    try {
      let product = new Product({...serviceData})
      await product.save()
      return product
    } catch (error) {
      console.log('somthing went worng in create product')
      throw new Error(error)
    }
  },
}
