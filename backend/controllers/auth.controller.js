const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginModel = require('../model/login.model');

async function login(req, res) {
    const { email, password } = req.body;
    console.log("from controller:" + email + " " + password);
    try {
        const user = await loginModel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid Email' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid Password' });

        const payload = { id: user.id };
        const token = jwt.sign(payload, process.env.SECRET_KEY);

        return res.status(200).json({ token, userData: user });
    } catch (err) {
        console.error("Error during login:", err); // Log the error
        return res.status(500).json({ message: "Error occurred while logging in", error: err.message });
    }
}

async function signup(req, res) {
    const { username, email, password, address, phone } = req.body;
    try {
        const existingUser = await loginModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: `User with email ${email} already has an account. Please sign in.` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await loginModel.create({ username, email, password: hashedPassword, address, phone });
        const payload = { id: newUser.id };

        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
            if (err) {
                console.error("Error creating token:", err); // Log the error
                return res.status(500).json({ message: "Token creation failed", error: err.message });
            }
            return res.status(200).json({ token, userData: newUser });
        });
    } catch (err) {
        console.error("Error during signup:", err); // Log the error
        return res.status(500).json({ message: "Error occurred while signing up", error: err.message });
    }
}

module.exports = { login, signup };
