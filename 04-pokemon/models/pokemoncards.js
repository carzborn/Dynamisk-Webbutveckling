const bookshelf = require('./bookshelf');

const PokemonCards = bookshelf.model('PokemonCards', {
    tableName: "pokemoncards"
});

module.exports = PokemonCards;