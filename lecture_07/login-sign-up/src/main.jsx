import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './routes/LoginPage'

// plus za domashna sign up / login / homepage
// da napravite poseben sing up
// poseben login
// poseben homepage
// handlanje na user so localstorage.

// drugata domashna vo drugiot proekt.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<ProtectedRoute />}
          children={<Route path='/' element={<HomePage />} />}
        />

        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
