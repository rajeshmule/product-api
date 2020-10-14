const Joi = require('joi')

module.exports = {
  signup: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
  login: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}
