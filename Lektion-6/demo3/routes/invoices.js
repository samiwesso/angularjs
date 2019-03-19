const express = require('express');
const route = express.Router();

// http://localhost:5000/api/invoices/
route.get('/', (req, res, next) => {
    res.status(200).json({invoice: "12312111"});
});


module.exports = route;