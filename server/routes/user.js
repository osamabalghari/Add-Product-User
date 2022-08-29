const express = require("express")
const { register, sigin, getOneUserData, getAllUserData,adminSigin,addAdmin,getAllAdminData,getOneAdminData  } = require("../controller/user")
const { getUser } = require("../middleware/user")
const router = express.Router()




router.post("/adduser", register)
router.post("/signin", sigin)
router.post("/addadmin", addAdmin)
router.post("/signinadmin", adminSigin)
router.get("/getalluser", getAllUserData)
router.get("/getoneuser", getUser, getOneUserData)
router.get("/getalladmin", getAllAdminData)
router.get("/getoneadmin", getUser, getOneAdminData)


module.exports = router