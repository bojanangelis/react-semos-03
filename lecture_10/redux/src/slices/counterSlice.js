import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
}
export const counterSlice = createSlice({
  name: 'counter', // unique name this is must !
  initialState: initialState, // ova e od 3 linija
  reducers: {
    // reducers se funkcii koi moze da gi koristime i da ja manipulirame vrednsota na ovoj inicial state
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action)
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
