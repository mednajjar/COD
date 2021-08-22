const express = require('express');
const route = express.Router();
const { getUsers, createAdmin, updateUser, deleteUser } = require('../controllers/adminController')
const { verifToken } = require('../middlewares/verifyToken')

// route.get('/users', verifToken('admin'), getUsers);
route.post('/createAdmin', createAdmin);
// route.put('/update/:id', verifToken('admin'), updateUser);
// route.delete('/user/:id', verifToken('admin'), deleteUser)



module.exports = route;