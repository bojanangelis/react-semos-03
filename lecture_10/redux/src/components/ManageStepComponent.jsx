import React from 'react'
import Step01 from './Step01'
import Step02 from './Step02'
import Step03 from './Step03'
import Step04 from './Step04'
import { useSelector } from 'react-redux'

const ManageStepComponent = () => {
  const step = useSelector((state) => state.wizardStep.value)

  const WizardStep = () => {
    switch (step) {
      case 1:
        return <Step01 />
      case 2:
        return <Step02 />
      case 3:
        return <Step03 />
      case 4:
        return <Step04 />
      default:
        return null
    }
  }

  return <WizardStep />
}

export default ManageStepComponent
