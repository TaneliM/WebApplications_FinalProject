var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const {body, validationResult} = require("express-validator");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");
const validateToken = require("../authorization/ValidateToken.js");
const { request } = require('../app');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

router.post('/user/login',
    upload.none(),
    function(req, res, next) {
        User.findOne({username: req.body.username},
        function(err, user) {
            if (err) {
                throw err;
            }
            if (user) {
                bcrypt.compare(req.body.password, user.password,
                function(err, match) {
                    if (err) {
                        throw err;
                    }
                    if (match) {
                        const jwToken = {
                            id: user._id,
                            username: user.username
                        }
                        jwt.sign(
                            jwToken,
                            process.env.SECRET,
                            {expiresIn: 3600},
                            function (err, token) {
                                if (err) {
                                    throw err;
                                }
                                return res.json({success: true, token});
                            }
                        );
                    } else {
                        return res.status(403).json({errors: "Incorrect username or password."})
                    }
                });
            } else {
                return res.status(403).json({errors: "Incorrect username or password."})
            }
        });
    }
);

router.post('/user/register',
    body("username").isLength({min: 3}).trim().escape(),
    body("password").isLength({min: 5}),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        User.findOne({username: req.body.username}, (err, user) => {
            if (err) {
                console.log(err);
                throw err
            };
            if (user) {
                return res.status(403).json({errors: [{msg: "already in use", param: "username"}]});
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        User.create({
                            username: req.body.username,
                            password: hash},
                            (err, ok) => {
                                if (err) {
                                    throw err;
                                }
                                return res.status(201).json({success: "Account created."});
                            }
                        );
                    });
                });
            }
        });
});

router.get('/post/all', (req, res, next) => {
    Post.find({}, (err, posts) =>{
        if(err) return next(err);
        res.status(200).json({posts});
    });
});

router.get('/post/:id', (req, res, next) => {
    Post.findOne({_id: req.params.id}, (err, post) => {
        if(err) return next(err);
        Comment.find({postId: req.params.id}, (err, comments) => {
            let data = {post: post, comments: comments}
            res.status(200).json(data);
        });
    });
});

router.post("/post/new", validateToken, (req, res, next) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        user: req.user.username
    })
    res.status(200).json({success: true});
});

router.post("/post/comment/new", validateToken, (req, res, next) => {
    Comment.create({
        text: req.body.text,
        user: req.user.username,
        postId: req.body.id
    })
    res.status(200).json({success: true});
});

module.exports = router;