const { MongoClient } = require('mongodb'),
    { Config } = require('../config'),
    debug = require('debug')('app:module-database');

var connection = null;
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if (!connection) {

            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();

            debug('New connection using MongoDB Atlas');
        }

        debug('Reusing connection')
        const db = connection.db(Config.mongoDbName);
        resolve(db.collection(collection));
    } catch (error) {

        reject(error);
    }
})