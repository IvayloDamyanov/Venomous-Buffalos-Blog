const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema - can be later replaced by mongodb

const PostSchema = mongoose.Schema({
    ownerUsername: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
        // Buffer //if it fails will use string for url
    },
    text: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    // dateEdited: {
    //     type: Date
    //     // default: Date.now()
    // },
    // likes: { type: Number, default: 0 },
    // likedBy: { type: Array },
    // dislikes: { type: Number, default: 0 },
    // dislikedBy: { type: Array },
    // comments: [{
    //   content: { type: String, validate: commentValidators },
    //   commentator: { type: String },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now()
    //   }
    // }]
});

const Post = module.exports = mongoose.model('Post', PostSchema);

// module.exports.addPost = function(newPost, callback) {
//     newPost.save(callback);
// }

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
