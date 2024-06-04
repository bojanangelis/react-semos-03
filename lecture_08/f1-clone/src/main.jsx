import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Routes/Root'
import Drivers from './Routes/Drivers'
import Driver from './Routes/Driver'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/drivers',
        element: <Drivers />,
      },
      {
        path: '/driver/:id',
        element: <Driver />,
      },
    ],
  },
])

// homework ..

// dve apinja da iskoristite od ovoj url
//https://openf1.org/#drivers

// posebna strana kade sho ke gi prikazite kako driver komponentata na primer
// primer labs i dinamicna ruta za labs ako e mozno.

// isto taka ova da e so protected route da ne mozi da vlezi ako ne e logiran ili nema account.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
