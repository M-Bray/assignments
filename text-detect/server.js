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
  .labelDetection('http://andrahem.com/354/wild-party-girls-naked.jpg')
  .then(results => {
    res.send(results)
  })
})

app.listen(8000, () => {
  console.log('Server Listening')
})
