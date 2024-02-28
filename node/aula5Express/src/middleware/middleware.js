module.exports = (req, res, next) => {
  if (req.body.cliente) {
    console.log(`${req.body.cliente} voce por aqui`);
  }
  next();
};
