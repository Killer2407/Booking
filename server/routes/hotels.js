const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel } = require('../controllers/hotelController.js');
const { verifyAdmin } = require('../utils/verifyToken.js');

const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel)

//Update
router.put('/:id', verifyAdmin, updateHotel)

//Delete
router.delete('/:id', verifyAdmin, deleteHotel)

//Get
router.get('/:id', getHotel)

//Get All
router.get('/', getAllHotel)

module.exports = router 
