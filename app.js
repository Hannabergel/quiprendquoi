const express = require('express');
const app = express();
const port = process.env.PORT;
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
    console.log(req.body);
    res.send('Post ok !')
});

app.set('view engine', 'pug');

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));    
