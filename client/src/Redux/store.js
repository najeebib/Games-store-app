import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { idSlice } from './userID';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    id: idSlice.reducer,
  },
  middleware: [thunk],

});

export default store;
