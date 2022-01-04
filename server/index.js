const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./routes/products');
require('dotenv-expand')(require('dotenv').config())

mongoose
    .connect(process.env.MONGO_DB_URI, { 
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