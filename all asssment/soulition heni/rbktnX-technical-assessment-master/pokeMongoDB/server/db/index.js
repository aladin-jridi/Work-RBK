var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri, { useMongoClient: true }, () => {
  console.log('db connected');
});


var db = mongoose.connection;


module.exports = db;
