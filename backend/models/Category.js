const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        enum: [''],
        default: ''
    },
    slug:{
        type: String,

    }
})

module.exports = mongoose.model('Category', categorySchema)