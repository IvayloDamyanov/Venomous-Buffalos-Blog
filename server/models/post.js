const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema - can be later replaced by mongodb

const PostSchema = mongoose.Schema({
    ownerUsername: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: Buffer //if it fails will use string for url
    },
    text: {
        type: String
    },
    dateCreated: {
        type: Date
    },
    dateEdited: {
        type: String
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPostByName = function(id, callback) {
    Post.findByName(name, callback);
}
