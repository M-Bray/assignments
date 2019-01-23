const express = require('express');
require('dotenv').config();

const app = express();

//DATABASE
const database = require('./database');

app.use(express.json());

app.get('/transformers', (req, res) => {
  const foundTransformers = database.find();
  res.status(200).send(foundTransformers);
})
//POST
app.post('/transformers', (req, res) => {
  //access the request body
  const newTransformer = req.body;
  //save to database
  const savedBot = database.save(newTransformer);
  //send back the saved bot
  res.status(201).send(savedBot)
})

app.delete('/transformers/:id', (req, res) => {
  //find the id from the url params
  const id = req.params.id;
  //deletes from database
  database.findByIdAndRemove(id);
  //sendback a confirmation 204 response
  res.status(204).send();
})

app.listen(process.env.PORT, console.log(`server is listening on PORT ${process.env.PORT} yuh bish`))