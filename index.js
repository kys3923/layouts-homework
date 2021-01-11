const { response } = require('express');
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/loveit', require('./controllers/loveit'));
app.use('/leaveit', require('./controllers/leaveit'));

app.get('/animals', (req, res) => {
    res.render('/animals', {animals: ['sand crab', 'corny joke dog']});
});

app.get('/foods', (req, res) => {
    res.render('/foods', {foods: ['sushi', 'steak']});
});

app.get('/movies', (req, res) => {
    res.render('/movies', {movies: ['Ben', 'Omen']});
});

app.get('/products', (req, res) => {
    res.render('/products', {products: ['BlackMagic', 'JUUL']});
});


app.listen(8000)