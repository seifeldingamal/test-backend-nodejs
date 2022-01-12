const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require("./db");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/products.yaml');

const app = express();

connect()
.then((success) => {
    console.log(success);
    // Middleware
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    const noAuthRoutes = require("./routes/noauth/routes")
    app.use('/noauth', noAuthRoutes);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
})
.catch((err) => {
    console.log("It was bad " + err);
})
