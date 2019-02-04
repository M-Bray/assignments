const express = require('express');
const vision = require('@google-cloud/vision');
const fs = require('fs');
require('dotenv').config();

//GOOGLE VISION API
const client = new vision.ImageAnnotatorClient();

const app = express();

app.use(express.json(), express.urlencoded());

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
  .labelDetection('https://media.npr.org/assets/img/2016/04/17/handwritten-note_wide-941ca37f3638dca912c8b9efda05ee9fefbf3147.jpg?s=1400')
  .then(results => {
    res.send(results)
  })
})

app.listen(8000, () => {
  console.log('Server Listening')
})
