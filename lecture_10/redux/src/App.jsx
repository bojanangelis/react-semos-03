import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './slices/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value) // so ovoj count ke povikuvame state)
  const dispatch = useDispatch() // so ovoj dispatch ke povikuvame funkcija

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementByAmount(333))}>Increment By 333</button>
    </>
  )
}

export default App
