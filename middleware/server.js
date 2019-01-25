const express = require('express');
require('dotenv').config()

const middleware = require('./lib/index');

const app = express();

app.use((req, res, next) => {
  req.test = 'Hello World'
  req.
  console.log(res)
})

app.listen(process.env.PORT, () => console.log(`listening on PORT ${process.env.PORT}))

