const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        ennum: ['admin', 'client', 'vendeur', 'livreur'],
        default: 'client'
    },
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);