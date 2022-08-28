const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const hash = bcrypt.hashSync(password, 10);
        const user = await User.create({
            name, email, password: hash
        })

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
const sigin = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ success: false, message: "User Not Exist" })
            return
        }
        const validate = bcrypt.compareSync(password, user.password)
        if (!validate) {
            res.status(400).json({ success: false, message: "Password did not match" })
            return
        }
        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: 86400 });
        res.status(200).json({ success: true, message: "Successfully Login", validate, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getAllUserData = async (req, res) => {
    try {

        const user = await User.find().select("-password")
        if (!user) {
            res.status(400).json({ success: false, message: "There is no user to show" })
            return
        }
        res.status(200).json({ success: true, user })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const getOneUserData = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.user.email })
        if (!user) {
            res.status(400).json({ success: false, message: "There is no user to show" })
            return
        }
        res.status(200).json({ success: true, user })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { register, sigin, getAllUserData, getOneUserData }