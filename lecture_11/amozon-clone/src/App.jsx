import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import CartPage from './routes/CartPage'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/cart'
          element={
            <>
              {/* ova proveruva dali e logiran, so znaci cart page moze da ja pristapi samo ako e logiran odnsno signed in! */}
              <SignedIn>
                <CartPage />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
