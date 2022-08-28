const express = require("express")
const dataBase = require("./db/database")
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")



dataBase()
const app = express()


//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use("/api/product/", productRouter)
app.use("/api/user/", userRouter)
app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
})