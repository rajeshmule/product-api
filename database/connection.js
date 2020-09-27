const mongoose = require('mongoose');

module.exports = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("database connected.");
    } catch (err) {
        console.log("Database connection error.", err);
        throw new Error(err);
    }
   
}