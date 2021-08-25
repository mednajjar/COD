const express = require('express');
const routes = express.Router();
const { 
    createClient, 
    validClient 
    } = require('../controllers/ClientController');
const { 
    createVendeur, 
    validVendeur, 
    freePack, 
    addProduct,
    deleteProduct 
    } = require('../controllers/VendeurController');
const {verifToken} = require('../middlewares/verifyToken');
const Vendeur = require('../models/Vendeur');
const multer = require('../middlewares/multer')

/**
 * @param Client routes
 */

routes.post('/createClient', createClient);
routes.post('/validClient', validClient);


/**
 * @param vendeur routes
 */

 routes.post('/createVendeur', createVendeur);
 routes.post('/validVendeur', validVendeur);
 routes.put('/freePack', verifToken('vendeur', Vendeur), freePack);
 routes.post('/addProduct', verifToken('vendeur', Vendeur), multer.fields([{ name: 'images', maxCount: 4 }, { name: 'imgPrincipal', maxCount: 1 }]) , addProduct);
 routes.delete('/deleteProduct', verifToken('vendeur', Vendeur), deleteProduct)

 /**
  * @param customer routes
  */


  /**
   * @param livreur routes
   */

module.exports = routes;