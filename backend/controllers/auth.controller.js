const loginModel = require('../model/login.model');

async function login(req, res) {
    const { email, password } = req.body;
    console.log("from controller:"+email+" "+password);
    try {
        const user = await loginModel.findOne({ email });
        if (user && user.password==password) {
            return res.status(200).json(user);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error occurred while logging in", error: err });
    }
}

async function signup(req, res) {
    const {  username, email, password, address, phone } = req.body;
    try {
        const user = await loginModel.findOne({ email });
        if(user && user.password==password){
          return res.status(200).json({ message: `User with ${email} already has an account. Please sign in.` });
        }
        else{
          const newUser = await loginModel.create({ username, email, password, address, phone });
          return res.status(200).json(newUser)
        }
    } catch (err) {
        return res.status(500).json({ message: "Error occurred while signing in", error: err });
    }
}

module.exports = { login, signup };