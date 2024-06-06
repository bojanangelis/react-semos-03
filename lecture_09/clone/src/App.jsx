import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './Pages/Root'
import Home from './Pages/Home'
import { useState } from 'react'
import TypeProvider from './store/typeProvider'
import AuthProvider from './store/AuthProvider'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import SignUpProvider from './store/SignUpProvider'

function App() {
  // ne treba vaka da izgleda ne e pravilno.
  // ovoj princip na rab ne e ubav i isto taka voa e prop drilling
  // const [type, setType] = useState('')

  // console.log(type)

  // homework.

  // --> kreirajte singup so wizzard od 4 cekori.
  // so react context.

  return (
    <>
      <AuthProvider>
        <TypeProvider>
          <BrowserRouter>
            <Routes path='*'>
              <Route path='/' element={<Root />}>
                <Route path='' element={<Home />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route
                path='/sign-up'
                element={
                  <SignUpProvider>
                    {/* children se vnatre */}
                    <SignUp />
                  </SignUpProvider>
                }
              />

              {/* SignUp */}
            </Routes>
          </BrowserRouter>
        </TypeProvider>
      </AuthProvider>
    </>
  )
}

export default App
