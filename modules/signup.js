const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SignupSchema = new Schema({

})

const signup = mongoose.model('signup', SignupSchema);

module.exports = signup;