import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  fullName: '',
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    handleState: (state, action) => {
      state[action.payload.key] = action.payload.value
    },
  },
})

export const { handleState } = signupSlice.actions

export default signupSlice.reducer
