const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Search
router.get('search', (req, res, next) => {
    console.log("server search get " + req.body);
    res.send("Server Search");
});

router.post('search', (req, res, next) => {
    console.log("server search post " + req.body);
    res.send("Server Search");
});

module.exports = router;
