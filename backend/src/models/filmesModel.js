const connection = require('./connection');

/* LISTAR TUDO */
const getAll = async() => {
  const [filmes] = await (await connection).execute('SELECT * FROM filmes');
  return filmes;
};

module.exports = {
  getAll
};