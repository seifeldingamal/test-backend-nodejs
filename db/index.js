const mongoose = require('mongoose');
const config = require("../config")

module.exports = {
    connect: () => {
        return mongoose.createConnection(config.db, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
    }
}