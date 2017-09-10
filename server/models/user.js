const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema - can be later replaced by mongodb

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
module.exports = User;
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

// Encrypting the password
// TODO - handle the error better
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) {
            throw err;
        }
        callback(null, isMatch);
    });
}

// module.exports.editUser = function(userName, newData, callback) {
//     const query = { userName: this.userName }
//     const update = {
//         $set: {
//             name: newData.name,
//             email: newData.email,
//             description: newData.description,
//             location: newData.location
//         }
//     }
//     return User.findByIdAndUpdate(query, update)
// }

//    User.update({username: userName}, {
//     name: newData.name, 
//     email: newData.email, 
//     description: newData.description,
//     location: newData.location
// }, function(err, numberAffected, rawResponse) {
//    //handle it
// })
