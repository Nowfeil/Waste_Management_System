const loginModel = require('../model/login.model');

async function getData(req, res) {
    const { uid, username, ...updateData } = req.body;
    console.log("Request body:", req.body);

    try {
        const updatedData = await loginModel.findOneAndUpdate(
            { uid },
            updateData,
            { new: true }
        );
        
        if (!updatedData) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUserData = await loginModel.find({uid:uid})
        res.status(200).json({ message: `Data Updated Successfully`, updatedUserData });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = getData;
