const { connect, connection } = require('mongoose');

connect('mongodb://localhost/mySocialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
