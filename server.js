const winston = require('winston');
const express = require('express');

const app = express();


app.use(express.static('public'));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  winston.info('Application is running');
});
