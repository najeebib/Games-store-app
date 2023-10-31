import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ID: false,
}

export const idSlice  = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setID(state, action) {
        state.ID = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { setID } = idSlice .actions

export default idSlice .reducer

