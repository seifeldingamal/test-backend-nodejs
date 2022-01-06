const mongoose = require('mongoose');
const { db } = require("../config")

module.exports = {
    connect: () => {
        return new Promise ((resolve, reject) => {
            mongoose.connect(db, { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            .then(() => {
                resolve("Database Connected Successfully!")
            })
            .catch((err) => {
                reject(err)
            })
        })
        }
}