const Product = require("../models/Products")
const fs = require("fs");

const addProducts = async (req, res) => {
    try {
        const { productName, productPrice, productGenre, descrip } = req.body
        const product = new Product({
            productName, picture: {
                data: fs.readFileSync("uploads/" + req.file.filename),
                contentType: "image/jpg",
            }, productPrice, productGenre, descrip
        })
        const user = await product.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { addProducts, getProducts }