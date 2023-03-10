const User = require("../model/User.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const register = async (req, res, next) => {
    try {
        console.log("hit")
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save();
        res.status(200).json("User is created")

    } catch (err) {
        console.log(err)
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        console.log('Hello')
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Email or Passsword not match!"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const { password, isAdmin, ...otherDetails } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails })
    } catch (err) {
        console.log('error',err)
        next(err);
    }
}

module.exports = { register, login };
