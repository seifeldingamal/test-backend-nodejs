const Product = require('../models/Product');

module.exports.productsGet = async (req, res) => {
    const products = await Product.find();
    res.send(products);
}

module.exports.productPost = async (req, res) => {
	const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });
	await product.save();
	res.send(product);
}