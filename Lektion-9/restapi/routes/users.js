const route = require("express").Router();

const users = require("../controllers/userController.js");

// unrestricted routes
route.post("/register", users.register);
route.post("/login", users.login);


// restricted routes
// const authorization = require("../auth/auth.js");
// route.get("/", authorization, users.GetAllUsers);

module.exports = route;