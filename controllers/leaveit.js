const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ['Ben', 'Omen']});
});

router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['BlackMagic', 'JUUL']});
});

module.exports = router;