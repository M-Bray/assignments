const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/photos')

let photoSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  // google stuff too
  labelAnnotations: [{
    description: String,
    score: Number
  }],
  textAnnotations: String
})

module.exports = mongoose.model('Photo', photoSchema)