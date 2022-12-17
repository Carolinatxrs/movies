/* VALIDAR O BODY DA REQUISIÇÃO */
const middleBody = (request, response, next) => {
  const {body} = request;

  if (body.titulo === undefined) {
    return response.status(400).json({message: 'Campo Vazio'});
  }

  next();
};

module.exports = {
  middleBody
}