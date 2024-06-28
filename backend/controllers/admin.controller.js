const loginModel = require('../model/login.model');
const issueModel = require('../model/issue.model');
async function getAllUsers(req, res) {
    const allusers = await loginModel.find({})
    console.log(allusers)
    res.status(200).send(allusers)
}

async function getAllIssues(req, res) {
    const allissues = await issueModel.find({})
    console.log(allissues)
    res.status(200).send(allissues)
}

module.exports = { getAllUsers,getAllIssues };