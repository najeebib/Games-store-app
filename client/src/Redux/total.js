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

// Action creators are generated for each case reducer function
export const { setTotal } = totalSlice .actions

export default totalSlice .reducer

