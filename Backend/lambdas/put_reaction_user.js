const { Reactions } = require('../models/models');

const putReactionUser = async (req, res) => {
    try {
        const { publication_id, user_id, value } = req.body;

        const reaction = await Reactions.findOne({
          where: {
            user_id: user_id,
            publication_id: publication_id
          },
          attributes: ['id', 'user_id', 'publication_id', 'value']

        });
    
        if (reaction) {
          await reaction.update({ value });
        } else {
          await Reactions.create({
            user_id: user_id,
            publication_id: publication_id,
            value
          });
        }
        return res.status(200).json({message: 'Reaction was added.'});

      } catch (error) {
        return res.status(500).json({message: 'Error in service.'});        
      }
};

module.exports = putReactionUser;