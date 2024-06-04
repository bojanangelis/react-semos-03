import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/post/:postId',
    element: <Post />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
