const loginModel = require('../model/login.model');

async function getAllUsers(req, res) {
    const allusers = await loginModel.find({})
    console.log(allusers)
    res.status(200).send(allusers)
}
module.exports = { getAllUsers };