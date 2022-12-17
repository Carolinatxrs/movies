const connection = require('./connection');

/* LISTAR FILME */
const getAll = async() => {
  const sql = 'SELECT * FROM filmes';
  const [filmes] = await (await connection).execute(sql);
  
  return filmes;
};

/* CADASTRAR FILME */
const create = async(dados) => {
  const {titulo, descricao, autor, imagem} = dados;

  const sql = 'INSERT INTO filmes (titulo, descricao, autor, imagem) VALUES (?, ?, ?, ?)';
  const [createFilm] = await (await connection).execute(sql, [titulo, descricao, autor, 'foto.png']);

  return {insertId: createFilm.insertId};
}

module.exports = {
  getAll,
  create
};