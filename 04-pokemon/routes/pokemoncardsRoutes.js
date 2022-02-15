const express = require('express');
const router = express.Router();
const pokemoncardsController = require('../controllers/pokemoncardsController');

router.get('/', pokemoncardsController.read);

router.get('/:id', pokemoncardsController.read);

router.post('/', pokemoncardsController.create);

router.put('/:id', pokemoncardsController.update);

router.delete('/:id', (req, res) => {
    res.send('Delete ' + req.params.id + ' not implemented')
});

module.exports = router;