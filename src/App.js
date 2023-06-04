import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import WriteBlog from './pages/WriteBlog'
import './styles/style.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blog/:id',
        element: <SingleBlog />,
      },
      {
        path: 'blog/write',
        element: <WriteBlog />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
