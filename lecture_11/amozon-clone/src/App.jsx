import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import CartPage from './routes/CartPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
