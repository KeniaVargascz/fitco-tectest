const getPublications = require('../lambdas/get_publications'); 
const { Publication, Reactions } = require('../models/models');

// Mock de los modelos
jest.mock('../models/models', () => {
    return {
        Publication: {
            findAll: jest.fn().mockResolvedValue([
                { id: 1, user_id: 1, description: 'description', created_at: new Date().toISOString(), visible: true },
                { id: 2, user_id: 2, description: 'description', created_at: new Date().toISOString(), visible: false }
            ])
        },
        User: {
            findAll: jest.fn().mockResolvedValue([
                { id: 1, username: 'user1', img: 'image_url' },
                { id: 2, username: 'user2', img: 'image_url' }
            ])
        },
        Reactions: {
            findAll: jest.fn().mockResolvedValue([
                { user_id: 1, publication_id: 1, value: true },
                { user_id: 2, publication_id: 2, value: false }
            ])
        },
        Sequelize: {
            col: jest.fn().mockReturnValue('created_at')
        }
    };
});

jest.mock('sequelize', () => {
    const actualSequelize = jest.requireActual('sequelize');
    return {
        ...actualSequelize,
        Sequelize: jest.fn().mockImplementation(() => ({
            authenticate: jest.fn().mockResolvedValue(),
            close: jest.fn(),
        })),
    };
});

describe('getPublications', () => {
    let req, res;

    beforeEach(() => {
        req = {
            params: { userId: 1 }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Publication.findAll.mockReset();
        Reactions.findAll.mockReset();
    });

    
    it('200 empty list', async () => {
        Publication.findAll.mockResolvedValue([]);

        await getPublications(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([]);
    });

    it('500 error in service', async () => {
        Publication.findAll.mockRejectedValue(new Error('Database error'));

        await getPublications(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Error in service.' });
    });
});
