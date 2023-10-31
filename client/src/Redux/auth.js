import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
}

export const authSlice  = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
        state.isLoggedIn = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin } = authSlice .actions

export default authSlice .reducer

