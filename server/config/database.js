const mongoose = require('mongoose');

mongoose.Promise = Promise;

module.exports = {
    // local
    // database: 'mongodb://localhost:27017/authentication',
    // mlab
    database: 'mongodb://buffalos:buffalos@ds131914.mlab.com:31914/nomadsblog',
    secret: 'secretkey'
}
