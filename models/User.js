const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    displayName: {type: String, required: true},
    posts: {type: Array},
    isLoggedIn: {type: Boolean, default: false}
});

const User = mongoose.model('User', userSchema);

module.exports = User;