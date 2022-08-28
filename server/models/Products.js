const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productGenre: {
        type: String,
        required: true
    },
    descrip: {
        type: String,
        required: true
    },
    picture: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("Product", productSchema)