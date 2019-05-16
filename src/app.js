const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const index = require('./routes/index');
const products = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', products);

module.exports = app;