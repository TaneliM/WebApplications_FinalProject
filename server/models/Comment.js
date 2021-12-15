const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema ({
    commentText: {type: String},
    userId: {type: String}
});

module.exports = mongoose.model("comments", commentSchema);