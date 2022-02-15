const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK!');
});

router.use('/pokemoncards', require('./pokemoncardsRoutes'));
router.use('/pokemonfriends', require('./pokemonfriendsRoutes'));
router.use('/pokemonbattles', require('./pokemonbattlesRoutes'));

module.exports = router;