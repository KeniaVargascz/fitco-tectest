const { Publication, User, Reactions } = require('../models/models');

const getPublications = async (req, res) => {
    try {
        const { userId } = req.params;
        const publications = await Publication.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'username', 'img']
                },
                {
                    model: Reactions,
                    as: 'reactions',
                    where: { user_id: userId },
                    required: false,
                    attributes: ['value']
                }
            ],
            order: [['created_at', 'DESC']]
        });

        const publicationsWithReactions = publications.map(pub => {
            const reaction = pub.reactions && pub.reactions.length > 0 ? pub.reactions[0].value : false;
            return { ...pub.toJSON(), value: reaction };
        });
        res.status(200).json(publicationsWithReactions);

    } catch (error) {
        res.status(500).json({ message: 'Error in service.' });
    }
};

module.exports = getPublications;
