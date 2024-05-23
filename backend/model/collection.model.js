const { model } = require('mongoose')
const mongoose = require('../mongo_connect/mongo.connect')

const CollectionSchema = mongoose.Schema({
    userId: String,
    collectionDate: String,
    status: String,
    notes: String,
})

const CollectionModel = mongoose.model("Collection", CollectionSchema)
module.exports = CollectionModel