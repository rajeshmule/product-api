const express = require('express')
const router = express.Router()

const productController = require('../../controllers/product')
const joiSchemaValidation = require('../../middleware/joiSchemaValidation')
const productSchema = require('../../apiSchema/product')
const tokenValidation = require('../../middleware/tokenValidation')

router
  .route('/')
  .post(
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct,
  )
  .get(
    tokenValidation.validateToken,
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts,
  )

router
  .route('/:id')
  .get(tokenValidation.validateToken, productController.getProductById)
  .put(
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.updataProductSchema),
    productController.updateProduct,
  )
  .delete(tokenValidation.validateToken, productController.deleteProduct)

module.exports = router
