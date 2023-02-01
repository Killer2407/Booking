const Room = require('../model/Room.js');
const Hotel = require('../model/Hotel.js');
const { createError } = require('../utils/error')

const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })

        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)

    } catch (err) {
        next(err) 
    }
}

//Checking availability of room
const updateRoomAvailability = async (req, res, end) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        )
        res.status(200).json("Room status has been updated")
    } catch (err) {
        next(err)
    }
}

const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { room: req.params.id },
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room is deleted")
    } catch (err) {
        next(err)
    }
}

const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

const getAllRoom = async (req, res, next) => {
    try {
        const allRoom = await Room.find()
        res.status(200).json(allRoom)

    } catch (err) {
        next(err)
    }
}

module.exports = { createRoom, updateRoomAvailability, updateRoom, deleteRoom, getRoom, getAllRoom }
