const express = require('express');
const route = express.Router();

// http://localhost:5000/api/users/
route.get('/', (req, res, next) => {
    res.status(200).json({username: "Hans"});
});


module.exports = route;