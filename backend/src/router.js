const express = require('express');
const filmesController = require('./controllers/filmesController');

const router = express.Router();

/* Endpoint READ ALL - [GET] / filmes */
router.get('/filmes', filmesController.getAll);

/* Endpoint CREATE - [POST] / filmes */
router.post('/filmes', filmesController.create);

module.exports = router;