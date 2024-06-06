import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import AuthProvider from './store/AuthProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes path='*'>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
