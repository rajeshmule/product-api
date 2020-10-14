const bcrypt = require('bcrypt')

const User = require('../models/user')
const {formatMongoData, checkObjectId} = require('../helper/dbHelper')
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
}
