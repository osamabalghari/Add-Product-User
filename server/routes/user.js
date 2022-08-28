const express = require("express")
const { register, sigin, getOneUserData, getAllUserData } = require("../controller/user")
const { getUser } = require("../middleware/user")
const router = express.Router()




router.post("/adduser", register)
router.post("/signin", sigin)
router.get("/getalluser", getAllUserData)
router.get("/getoneuser", getUser, getOneUserData)


module.exports = router