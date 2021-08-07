const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email:{
        type: String,
        // required: true
    },
    password:{
        type: String,
        // required: true
    },
});

// Export User model
var User = module.exports = mongoose.model('users', UserSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}