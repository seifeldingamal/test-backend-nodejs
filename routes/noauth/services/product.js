const Product = require('../../../models/Product');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = productServices = {
    saveProduct: (title, description, price, category) => {
        return new Promise((resolve, reject) => {
            const newProduct = new Product({
                title,
                description,
                price,
                category
            }).save()
            newProduct
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    allProducts: () => {
        return new Promise((resolve, reject) => {
            Product.find({})
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
    updateProduct: (id, updates) => {
        return new Promise((resolve, reject) => {
            Product.findOneAndUpdate({ 
                    _id:  new ObjectId(id),
                }, updates, {
                    new: true, 
                    useFindAndModify: false
            })
            .then((result) => {
                resolve(result)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },
    deleteProduct: (id) => {
        return new Promise ((resolve, reject) => {
            Product.findByIdAndDelete
            ( new ObjectId(id))
            .then((result) => {
                resolve(result)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },
    filterProducts: (keyword) => {
        return new Promise((resolve, reject) => {
            Product.find({
                $or: [{'title': keyword.title}, {'category': keyword.category}]
            })
            .then((result) => {
                resolve(result)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
}