const express = require('express')
const router = express.Router()

const productController = require('../../controllers/product')

router.route('/').post(productController.createProduct)

module.exports = router