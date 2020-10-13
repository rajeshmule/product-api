const productService = require('../services/product')
const constants = require('../constants')

module.exports = {
  createProduct: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.createProduct(req.body)
      response.status = 200
      response.message = constants.productMessage.PRODUCT_CREATED
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
  getAllProducts: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.getAllProducts(req.query)
      response.status = 200
      response.message = constants.productMessage.PRODUCT_FETCHED
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
  getProductById: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.getProductById(req.params)
      response.status = 200
      response.message = constants.productMessage.PRODUCT_FETCHED
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
  updateProduct: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.updateProduct({
        id: req.params.id,
        updateInfo: req.body,
      })
      response.status = 200
      response.message = constants.productMessage.PRODUCT_UPDATED
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
  deleteProduct: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.deleteProduct(req.params)
      response.status = 200
      response.message = constants.productMessage.PRODUCT_DELETED
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
}
