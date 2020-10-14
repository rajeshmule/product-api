const express = require('express')

const router = express.Router()
const productRouter = require('./product')
const userRouter = require('./user')

router.use('/products', productRouter)
router.use('/users', userRouter)

module.exports = router
