const bookshelf = require('./bookshelf');

const PokemonBattles = bookshelf.Model.extend({
    tableName: "pokemonbattles"
});

module.exports = PokemonBattles;