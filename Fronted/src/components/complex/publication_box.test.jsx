import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react';
import { mockStore } from '../../redux/mocks/mocks'; 
import PublicationBox from './publication_box'; 


describe('PublicationBox', () => {
  it('render', () => {
    const publication = {
      user: { username: 'sabrina' },
      description: 'Test',
      created_at: '2025-02-23',
      img: 'img.jpg',
    };

    act(() => {
      render(
        <Provider store={mockStore}>
          <PublicationBox publication={publication} />
        </Provider>
      );
    });

    expect(screen.getByText(/sabrina/i)).toBeInTheDocument();
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});