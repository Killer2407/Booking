const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const authRoute = require("./routes/auth.js");
const hotelsRoute = require("./routes/hotels.js");
const usersRoute = require("./routes/users.js");
const roomsRoute = require("./routes/rooms.js");
// const cookieParser = require('cookie-parser');

require('dotenv').config({ path: './.env' })
const port = process.env.PORT || 5000;

app.use(cors())
// app.use(cookieParser())

mongoose.set('strictQuery', true)
// console.log(process.env.MONGO_DB)
mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connection successful...")
    }).catch((error) => {
        console.log(error.message)
        console.log(error.message || "Connection Failed...")
    })

// middleWare
app.use(express.json())
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)


// app.get('/', (req, res) => {
//     res.send("Api is working")
// })
app.use((err, req,res, next)=> {
    return res.sendStatus(500).json("Hello error from handler")
})

app.listen(port, () => console.log("Node is listening to " + port));