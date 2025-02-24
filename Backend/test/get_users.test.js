const getUsers = require('../lambdas/get_users');


jest.mock('../models/models', () => {
    return {
        User: {
            findAll: jest.fn()
        }
    };
});

describe('getUsers function', () => {
    it('200 get users', async () => {
        const usersMock = [
            { id: 1, username: 'user1', img: 'img1.jpg' },
            { id: 2, username: 'user2', img: 'img2.jpg' }
        ];
        require('../models/models').User.findAll.mockResolvedValue(usersMock);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUsers(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(usersMock);
    });

    it('404 no users', async () => {
        require('../models/models').User.findAll.mockResolvedValue([]);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUsers(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'No Users found.' });
    });

    it('500 errror in service', async () => {
        require('../models/models').User.findAll.mockRejectedValue(new Error('Database error'));

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getUsers(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Error in service.' });
    });
});
