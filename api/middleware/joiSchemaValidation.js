const Joi = require('joi')

const validateObjectSchema = (data, schema) => {
  return schema.validate(data)
}

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      validateObjectSchema(req.body, schema)
      next()
    }
  },
  validateQueryParams: (schema) => {
    return (req, res, next) => {
      validateObjectSchema(req.query, schema)
      next()
    }
  },
}
