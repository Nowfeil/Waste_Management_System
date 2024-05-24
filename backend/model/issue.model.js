const mongoose = require('../mongo_connect/mongo.connect')

const IssueSchema = mongoose.Schema({
    uid:String,
    issueType:String,
    issueDescription:String,
    status:String
})

const issueModel = mongoose.model("Issues",IssueSchema)

module.exports = issueModel