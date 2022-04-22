// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// TODO: Complete the pokemonSchema below.
var pokemonSchema = new mongoose.Schema({
  number: Number,
  name: String,
  types: [String],
  imageUrl: String
});
 
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('pokemon', pokemonSchema );
 
// exports.Pokemon = Pokemon;
module.exports = Pokemon;
