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
  .labelDetection('https://nationalinterest.org/sites/default/files/styles/desktop__1486_x_614/public/main_images/1280px-SR-71A_in_flight_near_Beale_AFB_1988.jpeg?itok=zkrTw5cZ')
  .then(results => {
    res.send(results)
  })
})

app.listen(8000, () => {
  console.log('Server Listening')
})
