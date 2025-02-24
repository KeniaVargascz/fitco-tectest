import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = { user: { username: 'testUser' } }) => state;

const mockStore = configureStore({
  reducer: {
    user: reducer
  }
});

export { mockStore };
