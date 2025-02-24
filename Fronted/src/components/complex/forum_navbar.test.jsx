import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'; 
import ForumNavbar from './forum_navbar';
import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('ForumNavbar', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
    });

    test('render', () => {
        useSelector.mockReturnValue({ isLoading: true, user: null });

        render(
            <Provider store={store}>
                <ForumNavbar userId="testUser" />
            </Provider>
        );

    });

    test('User info', () => {
        useSelector.mockReturnValue({
            isLoading: false,
            user: { username: 'TestUser', email: 'test@domain.com', img: 'https://example.com/img.png' },
        });

        render(
            <Provider store={store}>
                <ForumNavbar userId="testUser" />
            </Provider>
        );

        const user = {
            email: 'test@domain.com',
            name: 'User',
            avatar: 'test.jpg',
        };
        const emailElement = screen.getByTestId('user-email');
        expect(emailElement).toHaveTextContent(user.email);

    });

});
