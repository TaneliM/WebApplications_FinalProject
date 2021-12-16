const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema used by MongoDB to store comments to posts
let commentSchema = new Schema ({
    text: {type: String},
    user: {type: String},
    postId: {type: String}
});

module.exports = mongoose.model("comments", commentSchema);