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
  .textDetection('tmp/eagle-snakcing-on-cheetah.jpg')
  .then(results => {    
    res.send(results)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

})

app.listen(8000, () => {
  console.log('Server Listening')
})
