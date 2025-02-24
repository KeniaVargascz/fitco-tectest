const { User } = require('../models/models');

const getUserByUsername = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({
            where: { username } 
        });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json({ message: 'Error in service.' });
    }
};
module.exports = getUserByUsername;