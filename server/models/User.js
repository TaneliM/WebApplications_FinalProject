const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema used by MongoDB to store user information
let userSchema = new Schema ({
    username: {type: String},
    password: {type: String}
});

module.exports = mongoose.model("users", userSchema);