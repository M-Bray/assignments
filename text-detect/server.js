const express = require('express');
const vision = require('@google-cloud/vision');
const fs = require('fs');
const database = require("./Schema");
const multer = require("multer");
require('dotenv').config();

//GOOGLE VISION API
const client = new vision.ImageAnnotatorClient();

const app = express();

app.use(express.json(), express.urlencoded());

const upload = multer({ dest: __dirname + "/tmp"})
const type = upload.single("photo")

app.get('/vision', (req, res) => {

  console.log("Testing")

  client
  .textDetection('tmp/handwritten-note.jpg')
  .then(results => {    
    res.send(results)
  })

  .catch(err => {
    console.error('ERROR:', err);
  });

})

app.get('/labels', (req, res) => {

  console.log("Testing Labels")

  client
  .labelDetection('https://i.pinimg.com/originals/f9/ca/af/f9caaf61928068c980caa33ba3d28f27.jpg')
  .then(results => {
    res.send(results)
  })
})

app.post('/photos', type, (req, res) => {
  console.log(req.body, req.file)

  const newPhoto = new database({
    fileName: req.file.filename
  })
  newPhoto.save()
  res.send(req.file.filename)

  console.log("Testing Photos")
  console.log(req.body)

})

app.use(express.static("/tmp"))

app.listen(8000, () => {
  console.log('Server Listening')
})

