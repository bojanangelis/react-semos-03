import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import wizardStepReducer from '../slices/wizardStepSlice'
import signupReducer from '../slices/signupSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, // morame imento na slicot vo primerov counterReducer!
    wizardStep: wizardStepReducer,
    signupSlice: signupReducer,
  },
})
