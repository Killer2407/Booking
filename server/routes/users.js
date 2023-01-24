const express = require('express');
const {  updateUser, deleteUser, getUser, getAllUser } = require('../controllers/userController');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();

//Update
router.put('/:id', verifyUser, updateUser)

//Delete
router.delete('/:id',verifyUser, deleteUser)

//Get
router.get('/:id', verifyUser, getUser)

//Get All
router.get('/', verifyAdmin, getAllUser)

module.exports = router 
