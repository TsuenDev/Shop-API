const { ObjectId } = require('mongodb'),
    { } = require('../../database/index.js'),
    COLLECTION = 'products',
    getAll = async () => {
        const collection = await Database(COLLECTION);
        return await collection.find({}).toArray();
    },
    getById = async (id) => {
        const collection = await Database(COLLECTION);
        return collection.findOne({ _id: ObjectId(id) });

    },
    create = async () => {
        const collection = await Database(COLLECTION);
        let result = collection.insertOne(product);
        return result.insertedId();
    }

module.exports.ProductsService = {
    getAll, getById, create
}