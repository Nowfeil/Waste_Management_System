const mongoose = require('../mongo_connect/mongo.connect')

const IssueSchema = mongoose.Schema({
    userId:String,
    collectionDate:String,
    status:String,
    notes:String
})

const issueModel = mongoose.model("Issues",IssueSchema)

module.exports = issueModel