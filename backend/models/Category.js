const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        enum: ['informatique', 'Téléphone & Tablette', 'Maison & Cuisine', 'Beauté & Santé', 'Vêtement & Chaussures', 'Electroménager', 'Autres catégories'],
        default: null
    },
    slug:{
        type: String,
        default: null

    }
})

module.exports = mongoose.model('Category', categorySchema)
// {category: 'informatique', slug: 'informatique'},
//     {category: 'Autres catégories', slug: 'Autres_catégories'},
//     {category: 'Téléphone & Tablette', slug: 'Téléphone_&_Tablette'},
//     {category: 'Maison & Cuisine', slug: 'Maison_&_Cuisine'},
//     {category: 'Beauté & Santé', slug: 'Beauté_&_Santé'},
//     {category: 'Vêtement & Chaussures', slug: 'Vêtement_&_Chaussures'},
//     {category: 'Electroménager', slug: 'Electroménager'},