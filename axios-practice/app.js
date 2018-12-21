//app.js

var axios = require("axios");

axios.get('https://swapi.co/api/people/').then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error)
  });