const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const {formatMongoData} = require('../helper/dbHelper')
const constants = require('../constants')

module.exports = {
  signup: async ({email, password}) => {
    try {
      const user = await User.findOne({email})
      if (user) {
        throw new Error(constants.userMessage.DUPLICATE_EMAIL)
      }
      password = await bcrypt.hash(password, 10)
      const newUser = new User({email, password})
      let result = await newUser.save()

      return formatMongoData(result)
    } catch (error) {
      throw new Error(error)
    }
  },
  login: async ({email, password}) => {
    try {
      const user = await User.findOne({email})
      if (!user) {
        throw new Error(constants.userMessage.USER_NOT_FOUND)
      }
      const isValid = bcrypt.compare(password, user.password)
      if (!isValid) {
        throw new Error(constants.userMessage.INVALID_PASSWORD)
      }
      const token = jwt.sign(
        {id: user._id},
        process.env.SECRECT_KEY || 'this-is-secrect',
        {expiresIn: '1d'},
      )
      return {token, user: formatMongoData(user)}
    } catch (error) {
      throw new Error(error)
    }
  },
}
