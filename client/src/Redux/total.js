import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const totalSlice  = createSlice({
  name: 'Total',
  initialState,
  reducers: {
    setTotal(state, action) {
        state.value = action.payload;
      },
  },
})

export const { setTotal } = totalSlice .actions

export default totalSlice .reducer

