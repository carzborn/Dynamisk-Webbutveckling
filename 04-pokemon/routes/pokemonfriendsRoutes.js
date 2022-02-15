const express = require('express');
const router = express.Router();
const pokemonfriendsController = require('../controllers/pokemonfriendsController');
router.get('/', pokemonfriendsController.read);

router.get('/', (req, res) => {
    res.send('GET not implemented')
});

router.get('/:id', (req, res) => {
res.send('GET ' + req.params.id + ' not implemented');
});

router.post('/', (req, res) => {
    res.send('Post not implemented');
});

router.put('/:id', (req, res) => {
    res.send('Put ' + req.params.id + ' not implemented');
});

router.delete('/:id', (req, res) => {
    res.send('Delete ' + req.params.id + ' not implemented')
});

module.exports = router;