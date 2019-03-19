const express = require('express');
const app = express();


// http://locahost:5000/products
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);


module.exports = app;