const mongoose = require("mongoose");
const { schema } = require("./User");

const Schema = mongoose.Schema;

let postSchema = new Schema ({
    title: {type: String},
    text: {type: String},
    user: {type: String}
});
schema.index({title: "text", text: "text"});

module.exports = mongoose.model("posts", postSchema);