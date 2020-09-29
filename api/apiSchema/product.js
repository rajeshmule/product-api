const Joi = require('joi')

module.exports = {
  createProductSchema: Joi.object({
    name: Joi.string().required(),
    prise: Joi.number().required(),
    brand: Joi.string().required(),
  }),
}
