const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./routes/noauth/products');
const { connect } = require("./db")

db = connect()

db
.then(() => {
    const app = express();

    // Middleware
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/products', products);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
})