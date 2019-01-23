const express = require('express');
require('dotenv').config();

const app = express();

//DATABASE
const database = require('./database.js');

app.use(express.json());

app.get('/cosmicBeverages', (req, res) => {
  const foundBeverages = database.find();
  res.send(foundBeverages);
})

app.post('/cosmicBeverages', (req, res) => {
            
  //NEED TO SEE WHAT THE REQUEST BODY CONTAINS
  const beverageToSave = req.body;

            
  //ADD IT TO THE DATABASE
  const savedBeverage = database.save(beverageToSave);
            
  //SEND BACK RESPONSE CONTAINING THE NEWLY
  res.send(saved.Beverage)
})

app.delete('/cosmicBeverages/:id', (req, res) => {
  //grab ID from req
  const id = req.params.id;
  //find the thing by the id
  //remove the thing
  database.findByIdAndRemove(id);
  //sendback a confirmation 204 response
  res.status(204).send()
})

app.listen(process.env.PORT, () => console.log('server is listening on 8080 yuh bish'))