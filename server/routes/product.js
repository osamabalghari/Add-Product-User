const express = require("express")
const { addProducts, getProducts } = require("../controller/product")
const { upload } = require("../middleware/product")
const router = express.Router()



const app = express()
router.get("/get", getProducts)
router.post('/profile', upload, addProducts)


module.exports = router
