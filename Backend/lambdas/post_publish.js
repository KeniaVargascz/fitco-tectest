const { Publication } = require('../models/models');

const postPublish = async (req, res) => {
    try {
        const { description, user_id } = req.body;
    
        if (!description || !user_id) {
          return res.status(400).json({ message: 'Invalid params. Description and UserId are required.' });
        }
    
        const createPublication = await Publication.create({
          description,
          user_id,
        });
    
        return res.status(201).json(createPublication);
      } catch (error) {
        return res.status(500).json({ message: 'Error in service.' });
      }
};

module.exports = postPublish;