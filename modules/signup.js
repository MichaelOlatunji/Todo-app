const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    last_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique: true
    },
    username:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    gender: {
        type: String,
        required: true
    }
})

const signup = mongoose.model('User', SignupSchema);

module.exports = signup;