const mongoose = require('mongoose');
const mongoConfig = require("../config.json");

const {mongo} = mongoConfig;

if (!mongoConfig || !mongo) {
    // throw new Error("mongodb config error");
    console.error("mongodb config error")
}

const {username, password, host, port, database} = mongo;
const DB_URL = `mongodb://${host}:${port}`;
mongoose.connect(DB_URL, {
    user: username,
    pass: password,
    dbName: database,
    maxPoolSize: 10
});
const db = mongoose.connection;

console.log(DB_URL)

db.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`)
})

db.on('connected', () => {
    console.info(`Mongoose connection open to ${DB_URL}`)
})

db.on('disconnected', () => {
    console.info(`Mongoose connection disconnected`)
})

module.exports = mongoose;