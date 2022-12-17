const filmesModel = require('../models/filmesModel');

const getAll = async(request, response) => {
  const filmes = await filmesModel.getAll();
  return response.status(200).json(filmes);
  /* return response.status(200).json({message: 'controller ok!'});*/
};

module.exports = {
  getAll
};