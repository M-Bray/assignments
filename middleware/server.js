const express = require('express');
require('dotenv').config()

const middleware = require('./lib/index');

const app = express();

app.use( middleware.logger);

app.listen(process.env.PORT, () => console.log(`listening on PORT ${process.env.PORT}`));