const express = require('express');
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByCity, countByType, getHotelRooms } = require('../controllers/hotelController.js');
const { verifyAdmin } = require('../utils/verifyToken.js');

const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel)

//Update
router.put('/:id', verifyAdmin, updateHotel)
// router.put('/availability/:id', updateSelectedRooms)

//Delete
router.delete('/find/:id', verifyAdmin, deleteHotel)

//Get
router.get('/:id', getHotel)

//Get All
router.get('/', getAllHotel)
router.get('/city/countbycity', countByCity)
router.get('/city/countByType', countByType)
router.get('/room/:id', getHotelRooms)

module.exports = router 
