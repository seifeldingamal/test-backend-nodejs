const Product = require('../../../models/Product');
const productServices = require("../services/product");


module.exports = productController = {
    productPost: (req, res) => {
        let { title, description, price, category } = req.body

        productServices
            .saveProduct(title, description, price, category)
            .then((result) => {
                res.json({
                    success: true,
                    info: result,
                    message: "OK",
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "It was bad" + err,
                })
            })

    },
    productGet: (req, res) => {
        productServices
            .allProducts()
            .then((result) => {
                res.json({
                    success: true,
                    info: result,
                    message: "OK",
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "It was bad" + err,
                })
            })
    },
    productPut: (req, res) => {
        let { id } = req.params
        let { updates } = req.body

        productServices
            .updateProduct(id, updates)
            .then((result) => {
                res.json({
                    success: true,
                    info: result,
                    message: "OK",
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "It was bad" + err,
                })
            })
    },
    productDelete: (req, res) => {
        let { id } = req.params

        productServices
            .deleteProduct(id)
            .then((result) => {
                res.json({
                    success: true,
                    info: result,
                    message: "OK",
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "It was bad" + err,
                })
            })
    },
    productFilter: (req, res) => {
        let { keyword } = req.body

        productServices
            .filterProducts(keyword)
            .then((result) => {
                res.json({
                    success: true,
                    info: result,
                    message: "OK",
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "It was bad" + err,
                })
            })
    }
}