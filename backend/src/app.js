const express = require('express');
const router = require('./router');

const app = express();

//SINALIZANDO JSON E AS ROTAS
app.use(express.json());
app.use(router);

module.exports = app;