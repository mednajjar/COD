const express = require('express');
const routes = express.Router();
const { createClient, validClient } = require('../controllers/ClientController');
const { createVendeur, validVendeur } = require('../controllers/VendeurController');


/**
 * @Client routes
 */

routes.post('/createClient', createClient);
routes.post('/validClient', validClient);


/**
 * @vendeur routes
 */

 routes.post('/createVendeur', createVendeur);
 routes.post('/validVendeur', validVendeur);

module.exports = routes;