const filmesModel = require('../models/filmesModel');

const getAll = async(request, response) => {
  const filmes = await filmesModel.getAll();
  return response.status(200).json(filmes);
};

const getId = async(request, response) => {
  const {id} = request.params;

  const filmeId = await filmesModel.getId(id);
  return response.status(200).json(filmeId);
};

const create = async(request, response) => {
  const createFilm = await filmesModel.create(request.body, request.file);
  return response.status(201).json(createFilm);
};

module.exports = {
  getAll,
  create,
  getId
};