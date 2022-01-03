const Product = require('../models/Product');

module.exports.productsGet = async (req, res) => {
    const products = await Product.find();
    res.send(products);
}

module.exports.productsFilter = async (req, res) => {

    const products = await Product.find({
        $or: [{title: req.body.title}, {category: req.body.category}]
    });
    
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

module.exports.productPut = (req, res) => {
    let updates = req.body 

    Product.findOneAndUpdate
        ({ _id: req.params.id }, updates)
      .then
        (updatedProduct => res.json(updatedProduct))
      .catch
        (err => res.status(400).json("Error: " + err))
}

module.exports.categoryUpdate = (req, res) => {
    let newCat = req.body.category 

    Product.findOneAndUpdate
        ({ _id: req.params.id }, {
            category: newCat
        })
      .then
        (updatedProduct => res.json(updatedProduct))
      .catch
        (err => res.status(400).json("Error: " + err))
}


module.exports.productDelete = (req, res) => {
    Product.findByIdAndDelete
        (req.params.id)
    .then
        (() => res.json("Product deleted!"))
    .catch
        (err => res.status(400).json("Error: " + err))
}