import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { idSlice } from './userID';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    id: idSlice.reducer,
  },

});

export default store;
