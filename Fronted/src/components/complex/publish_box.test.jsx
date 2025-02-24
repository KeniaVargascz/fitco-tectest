import { render, screen, fireEvent } from '@testing-library/react';
import PublishBox from './publish_box';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { addPublication } from '../../redux/slices/publications/publicationSlice';

const mockStore = configureStore({
    reducer: {
        publication: (state = { publications: [] }, action) => {
            switch (action.type) {
                case addPublication.type:
                    return {
                        ...state,
                        publications: [...state.publications, action.payload],
                    };
                default:
                    return state;
            }
        },
        user: (state = { user: { name: 'Sabrina', id: 1 } }) => state,
    },
});

jest.mock('../../redux/slices/publications/publicationSlice', () => ({
    addPublication: jest.fn(), 
}));

describe('PublishBox', () => {
    test('render', () => {
        render(
            <Provider store={mockStore}>
                <PublishBox />
            </Provider>
        );

        expect(screen.getByLabelText(/escribe tu publicación.../i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('Clic on send', () => {
        render(
            <Provider store={mockStore}>
                <PublishBox />
            </Provider>
        );

        const input = screen.getByLabelText(/escribe tu publicación.../i);
        fireEvent.change(input, { target: { value: '' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(input.value).toBe('');
    });
});
