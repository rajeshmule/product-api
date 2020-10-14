const express = require('express')
const router = express.Router()

const userController = require('../../controllers/user')
const joiSchemaValidation = require('../../middleware/joiSchemaValidation')
const userSchema = require('../../apiSchema/user')

router
  .route('/signup')
  .post(joiSchemaValidation.validateBody(userSchema.signup), userController.signup)

router
  .route('/login')
  .post(joiSchemaValidation.validateBody(userSchema.login), userController.login)

module.exports = router
