const userService = require('../services/user')
const constants = require('../constants')

module.exports = {
  signup: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await userService.signup(req.body)
      response.status = 200
      response.message = constants.userMessage.SIGNUP_SUCCESS
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },

  login: async (req, res) => {
    let response = {...constants.defaultServerResponse}
    try {
      const responseFromService = await userService.login(req.body)
      response.status = 200
      response.message = constants.userMessage.LOGIN_SUCCESS
      response.body = responseFromService
    } catch (error) {
      response.message = error.message
    }
    return res.status(response.status).send(response)
  },
}
