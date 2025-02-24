const {User} = require('../models/models');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if (users.length === 0) {
            return res.status(404).json({ message: 'No Users found.' });
        }
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: 'Error in service.' });
    }
};

module.exports = getUsers;
