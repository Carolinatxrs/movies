const connection = require('./connection');

/* LISTAR FILME */
const getAll = async() => {
  const sql = 'SELECT * FROM filmes';
  const [filmes] = await (await connection).execute(sql);
  
  return filmes;
};

/* LISTAR ID */
const getId = async(id) => {
  const sql = 'SELECT * FROM filmes WHERE id = ?';
  const [filmeId] = await (await connection).execute(sql, [id]);
  
  return filmeId;
};

/* CADASTRAR FILME */
const create = async(dados, file) => {
  const {titulo, descricao, autor} = dados;
  const {filename} = file;

  const sql = 'INSERT INTO filmes (titulo, descricao, autor, imagem) VALUES (?, ?, ?, ?)';
  const [createFilm] = await (await connection).execute(sql, [titulo, descricao, autor, filename]);

  return {insertId: createFilm.insertId};
}

module.exports = {
  getAll,
  create,
  getId
};