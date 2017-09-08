const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');

// Search
router.get('/', (req, res, next) => {
    const query = req.query['0'];
    
    Post.getPostsByOwnerUsername(query, (err, data) => {
        res.json({
            success: true,
            results: data
        });
    });
});

router.post('/', (req, res, next) => {
    console.log("server search post " + req.body);
    res.send("Server Search post");
});
router.post('*', (req, res) => {
    console.log('searcher server all others');
    res.send("Server Search all");
});
router.get('*', (req, res) => {
    console.log('searcher server all others');
    res.send("Server Search all");
});



module.exports = router;
