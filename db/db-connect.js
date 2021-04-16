

const mongoose = require('mongoose');
const db = require('./db_connexion');

const mongo_uri = process.env.MONGODB_URI || db.mongoose_db;

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
mongoose.Promise = global.Promise;

module.exports = {
    connection
}