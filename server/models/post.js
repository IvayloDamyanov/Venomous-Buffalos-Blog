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

module.exports.addPost = function(newPost, callback) {
    newPost.save(callback);
}

module.exports.getPostsByOwnerUsername = function(query, callback) {
    var regex = new RegExp('^.*' + query + '.*$');
    
    Post.find({ownerUsername: regex}, callback);
    // return Post.find({name: regex})
    //     .exec(function (err, post) {
    //         if (err){
    //             console.log("Query error");
    //         }
    //         return post;
    //     });
}
