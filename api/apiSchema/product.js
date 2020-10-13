const Joi = require('joi')

module.exports = {
  createProductSchema: Joi.object({
    name: Joi.string().required(),
    prise: Joi.number().required(),
    brand: Joi.string().required(),
  }),
  getAllProductSchema: Joi.object({
    skip: Joi.string(),
    limit: Joi.string(),
  }),
  updataProductSchema: Joi.object({
    name: Joi.string(),
    prise: Joi.number(),
    brand: Joi.string(),
  }),
}
