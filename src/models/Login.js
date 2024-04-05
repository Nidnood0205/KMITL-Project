const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    loginId: {
      type: String,
      required: true,
    },
    username: { type: String, required: false },
    password: { type: String, require: false},
    createdAt: {
        type: Date,
        default: Date.now,
      },
 });


module.exports = mongoose.model('Login', LoginSchema)