const loginModel = require('../model/login.model');

async function getData(req, res) {
    const { username, ...updateData } = req.body;

    try {
        const updatedData = await loginModel.findOneAndUpdate(
            { username: username },
            updateData,
            { new: true }
        );
        
        if (!updatedData) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(updatedData);
        res.status(200).json({ message: `Data Updated Successfully: ${updatedData}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = getData;