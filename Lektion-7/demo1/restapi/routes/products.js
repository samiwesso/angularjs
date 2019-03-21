const express = require('express');
const route = express.Router();

// CRUD - HTTP Methods: Create = POST, Read = GET, Update PUT/PATCH, Delete = DELETE
//route.post()
//route.get()
//route.put()
//route.patch()
//route.delete()

route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            { productname: "hasses dator", price: 4000 },
            { productname: "annas dator", price: 6000 },
            { productname: "johans dator", price: 12000 }
        ]
    );
})

module.exports = route;