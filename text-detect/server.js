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

const upload = multer({ dest: __dirname + "/tmp" })
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

app.get('/photos', (req, res, next) => {
  database.find()
    .then(photos => {
      res.status(200).send(photos)
    })
    .catch(err => next(err))
})
app.get('/photos/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(`/Users/student/dev/assignments/text-detect/tmp/${fileName}`)
})

app.post('/photos', type, (req, res, next) => {

  client
    .labelDetection(__dirname + '/tmp/' + req.file.filename)
    .then(labelResults => {
      return client
        .textDetection(__dirname + '/tmp/' + req.file.filename)
        .then(textResults => {
          const annotation = textResults[0].fullTextAnnotation;
          return {
            labelAnnotations: labelResults[0].labelAnnotations,
            textAnnotations: annotation ? annotation.text : ""
          }
        })
    })
    .then(annotations => {
      const newPhoto = new database({
        ...req.file,
        ...annotations
      });
      return newPhoto.save()
    })
    .then(photo => res.status(201).send(photo))
    .catch(err => next(err))
})

app.use(express.static("/tmp"))

app.listen(8000, () => {
  console.log('Server Listening')
})

