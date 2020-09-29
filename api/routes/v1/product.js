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

module.exports = router
