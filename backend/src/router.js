const express = require('express');
const filmesController = require('./controllers/filmesController');
const filmesMiddleware = require('./middlewares/filmesMiddleware');

const router = express.Router();

/* Endpoint READ ALL e READ SINGLE - [GET] / filmes */
router.get('/filmes', filmesController.getAll);
router.get('/filmes/:id', filmesController.getId);

/* Endpoint CREATE - [POST] / filmes */
router.post('/filmes', filmesMiddleware.middleBody, filmesController.create);

module.exports = router;