const db = require("mongoose");
const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");