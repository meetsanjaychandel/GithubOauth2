// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    githubId: String
});

module.exports = mongoose.model('User', userSchema);
