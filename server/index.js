const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./routes/products');

mongoose
    .connect("mongodb+srv://admin:admin@m01.ks9a9.mongodb.net/Products?retryWrites=true&w=majority", { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(cors());

        app.use('/products', products);

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));
    })