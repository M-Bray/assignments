const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/photos')

let photoSchema = new mongoose.Schema({
  photoUrl: String
})

module.exports = mongoose.model('Photo', photoSchema)