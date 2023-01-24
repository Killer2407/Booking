const express = require('express');
const { createRoom, updateRoom,updateRoomAvailability, deleteRoom, getRoom, getAllRoom } = require('../controllers/roomController');
const { verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();

//Create
router.post('/:hotelid', verifyAdmin, createRoom)

//Update
router.put('/availability/:id', updateRoomAvailability);
router.put('/:id',  verifyAdmin, updateRoom)

//Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

//Get
router.get('/:id', getRoom)

//Get All
router.get('/', getAllRoom)

module.exports = router 
