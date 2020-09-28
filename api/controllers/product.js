const productService = require('../services/product')
const constants = require('../constants')

module.exports = {
  createProduct: async (req, res) => {
    console.log('controller')
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await productService.createProduct(req.body)
      response.status = 200
      response.message = constants.productMessage
      response.body = responseFromService
    } catch (error) {
      console.log('somthing went worng in create product contreller')
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
}
