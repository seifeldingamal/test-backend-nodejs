const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require("./db")


db = connect()
const app = express();

db
.then(() => {

    // Middleware
    app.use(bodyParser.json());
    app.use(cors());

    const noAuthRoutes = require("./routes/noauth/routes")
    app.use('/noauth', noAuthRoutes);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
})
