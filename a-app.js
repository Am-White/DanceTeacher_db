const express = require("express");
const app = express();
const PORT = 3030;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

app.get('/addSearch', (req, res) => {
    res.render('addSearch', {layout: 'index'});
});

app.get('/results', (req, res) => {
    res.render('results', {layout: 'index'});
});

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`)
});