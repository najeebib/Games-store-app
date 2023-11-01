import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { idSlice } from './userID';
import { totalSlice } from './total';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    id: idSlice.reducer,
    Total: totalSlice.reducer
  },

});

export default store;
