import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ID: 0,
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

export const { setID } = idSlice .actions

export default idSlice .reducer

