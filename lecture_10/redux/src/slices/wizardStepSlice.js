import { createSlice } from '@reduxjs/toolkit'

export const wizardStepSlice = createSlice({
  name: 'wizardStep',
  initialState: {
    value: 1,
  },
  reducers: {
    setWizardStep: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setWizardStep } = wizardStepSlice.actions

export default wizardStepSlice.reducer
