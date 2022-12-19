const express = require('express');
const router = require('./router');
var cors = require('cors');
const path = require('path');

const app = express();

//SINALIZANDO JSON E AS ROTAS
app.use(express.json());

app.use('/files', express.static('upload'));

app.use((request, response, next) => {
  var cors = require('cors');
  response.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

app.use(router);

module.exports = app;