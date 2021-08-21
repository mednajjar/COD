const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    idProduct:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    idClient:{type: mongoose.Schema.Types.ObjectId, ref: ('Client' || 'Customer')},
    total: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Order', orderSchema);