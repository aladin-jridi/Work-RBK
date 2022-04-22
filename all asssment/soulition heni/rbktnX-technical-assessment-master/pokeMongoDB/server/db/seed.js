const db = require('./index.js');
const Pokemon = require('../pokemon/Pokemon.js');

const allPokemons = require('../../data/pokemon.json');

const insertAllPokemons = function() {
  Pokemon.create(allPokemons)
    .then(() => db.disconnect());
};

insertAllPokemons();