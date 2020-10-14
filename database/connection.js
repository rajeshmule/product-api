const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (err) {
    throw new Error(err)
  }
}
