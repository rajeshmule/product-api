const express = require('express')
const router = express.Router()

const productController = require('../../controllers/product')
const joiSchemaValidation = require('../../middleware/joiSchemaValidation')
const productSchema = require('../../apiSchema/product')

router
  .route('/')
  .post(
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct,
  )
  .get(
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts,
  )

router
  .route('/:id')
  .get(productController.getProductById)
  .put(
    joiSchemaValidation.validateBody(productSchema.updataProductSchema),
    productController.updateProduct,
  )
  .delete(productController.deleteProduct)

module.exports = router
