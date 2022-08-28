const mongoose = require("mongoose")

const dataBase = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Data base Connected on ${process.env.MONGO_URL}`);
}

module.exports = dataBase