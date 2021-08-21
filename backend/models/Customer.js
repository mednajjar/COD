const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const customerSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
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
        default: 'customer'
    },
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Customer', customerSchema);