const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    text: {type: String},
    user: {type: String},
    postId: {type: String}
});

module.exports = mongoose.model("comments", commentSchema);