const getUserByUsername = require('../lambdas/get_user_by_username'); 

jest.mock('../models/models', () => {
    return {
        User: {
            findOne: jest.fn()
        },
        Sequelize: {
            col: jest.fn().mockReturnValue('status')
        }
    };
});

describe('getUserByUsername function', () => {
    it('200 get user', async () => {
        const userMock = { id: 1, username: 'user1', img: 'img1.jpg' };
        require('../models/models').User.findOne.mockResolvedValue(userMock); 

        const req = { params: { username: 'user1' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUserByUsername(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(userMock);
    });

    it('404 user not found', async () => {
        require('../models/models').User.findOne.mockResolvedValue(null);

        const req = { params: { username: 'user1' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUserByUsername(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'User not found.' });
    });

    it('500 error in service', async () => {
        require('../models/models').User.findOne.mockRejectedValue(new Error('Database error'));

        const req = { params: { username: 'user1' } }; 
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUserByUsername(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Error in service.' });
    });
});
