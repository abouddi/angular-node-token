var jwt = require('jwt-simple');

module.exports = function(req, res) {

  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, "shhh..");

  if (!req.headers.authorization) {
    return res.status(401).send({
      message: 'You are not authorized'
    });
  }

  if (!payload.sub) {
    res.status(401).send({
      message: 'Authentication failed!'
    });
  }

  res.json(jobs);
}

var jobs = [
  'Cook',
  'SuperHero',
  'Unicorn Wisperer',
  'Toast Inspector'
];
