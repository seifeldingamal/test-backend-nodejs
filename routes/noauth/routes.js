const express = require("express")
const products = require("./routes/product")
const router = express.Router()

router.use("/products", products)

module.exports = router;
