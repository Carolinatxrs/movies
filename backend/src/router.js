const express = require('express');
const multer = require('multer');
const path = require('path');
const filmesController = require('./controllers/filmesController');
const filmesMiddleware = require('./middlewares/filmesMiddleware');

/* middle do upload */
const storage = multer.diskStorage({
  destination: function(request, file, cb){
    cb(null, 'upload/');
  },
  filename: function(request, file, cb){
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({storage});

const router = express.Router();

/* Endpoint READ ALL e READ SINGLE - [GET] / filmes */
router.get('/filmes', filmesController.getAll);
router.get('/filmes/:id', filmesController.getId);

/* Endpoint CREATE - [POST] / filmes */
router.post('/filmes', upload.single('imagem'), filmesMiddleware.middleBody, filmesController.create);

module.exports = router;