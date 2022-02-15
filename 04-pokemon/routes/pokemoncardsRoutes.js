const express = require('express');
const router = express.Router();
const pokemoncardsController = require('../controllers/pokemoncardsController');

router.get('/', pokemoncardsController.read);

router.get('/:id', pokemoncardsController.read);

router.post('/', pokemoncardsController.create);

router.put('/:id', pokemoncardsController.update);

router.delete('/:id', pokemoncardsController.remove);

module.exports = router;