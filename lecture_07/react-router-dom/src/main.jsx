import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import Contact from './routes/contact'
import RootNew from './routes/root-new'
import AboutPage from './routes/about-page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      // vgnezdeni ili nested routes!
      router={createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/contacts/:contactId', // dynamic routes
              element: <Contact />,
              errorElement: <ErrorPage />,
            },
            {
              path: '/new/:contactId', // dynamic routes
              element: <Contact />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: '/about',
          element: <AboutPage />,
          errorElement: <ErrorPage />,
        },
      ])}
    />
  </React.StrictMode>
)
