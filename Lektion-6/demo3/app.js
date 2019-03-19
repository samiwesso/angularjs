const express = require('express');
const app = express();


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// http://locahost:5000/api/products
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// http://locahost:5000/api/users
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

// http://locahost:5000/api/invoices
const invoicesRoutes = require('./routes/invoices');
app.use('/api/invoices', invoicesRoutes);

// http://locahost:5000/
app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "Kolla dokumentationen för att hitta rätt routes"
    });
});




module.exports = app;