const mongoose  = require('mongoose');
const userSchema = require('./atomic/molecules/molecule-user');
//create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
