const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendeurSchema = mongoose.Schema({
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
        default: 'vendeur'
    },
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Vendeur', vendeurSchema);