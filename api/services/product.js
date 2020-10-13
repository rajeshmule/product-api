const Product = require('../models/product')
const {formatMongoData, checkObjectId} = require('../helper/dbHelper')
const constants = require('../constants')

module.exports = {
  createProduct: async (serviceData) => {
    try {
      let product = new Product({...serviceData})
      let result = await product.save()
      return formatMongoData(result)
    } catch (error) {
      throw new Error(error)
    }
  },
  getAllProducts: async ({skip = 0, limit = 10}) => {
    try {
      let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit))
      return formatMongoData(products)
    } catch (error) {
      throw new Error(error)
    }
  },
  getProductById: async ({id}) => {
    try {
      checkObjectId(id)
      let product = await Product.findById(id)
      if (!product) {
        throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
      }
      return formatMongoData(product)
    } catch (error) {
      throw new Error(error)
    }
  },
  updateProduct: async ({id, updateInfo}) => {
    try {
      checkObjectId(id)
      let product = await Product.findOneAndUpdate({_id: id}, updateInfo, {new: true})
      if (!product) {
        throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
      }
      return formatMongoData(product)
    } catch (error) {
      throw new Error(error)
    }
  },
  deleteProduct: async ({id}) => {
    try {
      checkObjectId(id)
      let product = await Product.findByIdAndDelete(id)
      if (!product) {
        throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
      }
      return formatMongoData(product)
    } catch (error) {
      throw new Error(error)
    }
  },
}
