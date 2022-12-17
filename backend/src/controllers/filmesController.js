const filmesModel = require('../models/filmesModel');

const getAll = async(request, response) => {
  const filmes = await filmesModel.getAll();
  return response.status(200).json(filmes);
};

const create = async(request, response) => {
  const createFilm = await filmesModel.create(request.body);
  return response.status(201).json(createFilm);
  // return response.status(201).json(request.body);
};

module.exports = {
  getAll,
  create
};