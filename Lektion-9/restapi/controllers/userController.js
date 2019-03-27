const db = require("mongoose");
const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.register = function(req, res) {
    User.find({ email: req.body.email })
        .exec()   
        .then(function(user) {
            if(user.length > 0) {
                return res.status(400).json({
                    message: `A user with the e-mail address ${req.body.email} already exists.`
                })
            } else {
                encrypt.hash(req.body.password, 10, function(err, hash) {
                    if(err) {
                        return res.status(500).json({ error: err});
                    } else {
                        var user = new User(
                            {
                                _id: new db.Types.ObjectId,
                                email: req.body.email,
                                password: hash,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname
                            }
                        );

                        user.save()
                            .then(function() {
                                res.status(201).json({
                                    message: `User ${req.body.firstname} ${req.body.lastname} was created successfully.`
                                })
                            })
                            .catch(function(err) {
                                res.status(500).json({
                                    message: `Failed to create user ${req.body.firstname} ${req.body.lastname}.`,
                                    errorcode: "500"
                                })
                            })
                    }
                })
            }
        }) 
}

exports.login = function(req, res) {
    User.find({ email: req.body.email })
        .then(function(user) {
            if(user.length === 0) {
                return res.status(401).json({
                    message: "User email or password is incorrect",
                    message2: "No user with this email address exists."
                })
            } else {
                encrypt.compare(req.body.password, user[0].password, function(err, result) {
                    if(err) {
                        return res.status(401).json({
                            message: "User email or password is incorrect"
                        })
                    } 

                    if(result) {
                        const token = jwt.sign( 
                            { userId: user[0]._id, email: user[0].email },
                            process.env.PRIVATE_SECRET_KEY,
                            { expiresIn: "24h" }                        
                        )

                        return res.status(200).json( {
                            message: "Authentication was successful"
                        })
                    }

                    return res.status(401).json({
                        message: "User email or password is incorrect"
                    })
                })
            }
        })
}