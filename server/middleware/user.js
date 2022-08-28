const jwt = require("jsonwebtoken")
require("dotenv").config()

const getUser = (req, res, next) => {
    try {
        const token = req.headers.token
        if (!token) {
            res.status(400).json({ success: false, message: "Not Authorized" })
            return

        }
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user
        next()
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { getUser }