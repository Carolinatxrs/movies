const express = require('express');
const filmesController = require('./controllers/filmesController');
const filmesMiddleware = require('./middlewares/filmesMiddleware');

const router = express.Router();

/* Endpoint READ ALL - [GET] / filmes */
router.get('/filmes', filmesController.getAll);

/* Endpoint CREATE - [POST] / filmes */
router.post('/filmes', filmesMiddleware.middleBody, filmesController.create);

module.exports = router;