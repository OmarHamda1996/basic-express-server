function validator(req, res, next) {
    const { name } = req.query;
  
    if (!name) {
      res.status(500).send('No name provided');
    } else {
      next();
    }
  }
  
  module.exports = validator;
  