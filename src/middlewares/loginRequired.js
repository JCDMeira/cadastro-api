import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { autorization } = req.headers;

  if (!autorization) {
    return res.status(401).json({
      errors: ['É preciso estar logado para executar essa ação'],
    });
  }
  const [, token] = autorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    require.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token inválido ou expirado.'],
    });
  }
};
