const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    idVendeur:{type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    idLivreur:{type: mongoose.Schema.Types.ObjectId, ref: 'Livreur'},
    title: {
        type: String,
        required: true,
    },
    shortD: {
        type: String,
        required: true,
    },
    longD: {
        type: String,
        required: true,
    },
    initialPrice: {
        type: Number,
        required: true,
    },
    soldPrice: {
        type: Number,
        required: true,
    },
    imgPrincipal: {
        type: String,
        required: true,
    },
    images: [Object],
    stock: {
        type: Number,
        required: true,
    },
    livreur: {
        type: Boolean,
        default: false,
    },
    etat: {
        type: String,
        enum: ['en-attente', 'confirmer', 'en-cours', 'livrer', 'annuler'],
        default: 'en-attente'
    }

});


module.exports = mongoose.model('Product', productSchema);