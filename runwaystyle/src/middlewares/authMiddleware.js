const jwt = require('jsonwebtoken');

exports.ensureAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send('No autorizado');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Token inválido');
  }
};
