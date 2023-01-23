const User = require("../model/User.js");

const register = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: req.body.password,
        })

        await newUser.save();
        res.status(200).json("User is created")

    } catch(err) {
        next(err);
    }
}

module.exports = { register };
