const express = require('express');
const router = express.Router();

// Register 
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// Validate - to validate the token - may not be used later
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
