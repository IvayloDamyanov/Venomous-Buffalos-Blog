const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = {
    database: 'mongodb://localhost:27017/authentication',
    secret: 'secretkey'
}
