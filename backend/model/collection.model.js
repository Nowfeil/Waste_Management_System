const { model } = require('mongoose')
const mongoose = require('../mongo_connect/mongo.connect')

const CollectionSchema = mongoose.Schema({
    username:String,
    collectionId:String,
    collectionDate: String,
    address: String,
    notes: String,
})

const CollectionModel = mongoose.model("Collection", CollectionSchema)
module.exports = CollectionModel